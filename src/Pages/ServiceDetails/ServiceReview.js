import React, { useContext, useEffect, useState } from 'react';
import {  FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvide';

const ServiceReview = ({ service }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([])


  // load user reviews 
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${service._id}`)
        .then(res => res.json())
        .then(data => {
          setReviews(data)
      })
  },[service._id])


  // add a new review 
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = new Date();
    const serviceId = service._id;
    const email = user.email;
    const ServiceTitle=service.title
    const displayName = user.displayName;
    const photoURL = user.photoURL;
    const userUid=user.uid
    const reviewValue = form.review.value;
    const review = { date, reviewValue, serviceId, email, userUid, displayName, photoURL, ServiceTitle };
    
    // post review database 
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const newReview = [review,...reviews]
          setReviews(newReview)
          form.reset()
          toast.success('Successfully add Review')
        }
        
      });
  };
  
  // user photo component 
  const userPhoto = (
    <>
      {user?.photoURL ? (
        <img className="w-12 rounded-full" src={user.photoURL} alt="" />
      ) : (
        <FaUser className="text-2xl mx-auto"></FaUser>
      )}
    </>
  );


  return (
    <div className="mt-10">
      <div className="flex justify-between items-center my-3">
        <h1 className="text-3xl font-bold text-gray-700 ml-4 md:ml-0">Reviews</h1>
        {user?.uid ? (
          <></>
        ) : (
          <Link to="/login">
            <button className="hover:text-purple-600 font-semibold text-xl md:pr-5 text-gray-700">
              Please login to add a review
            </button>
          </Link>
        )}
      </div>
      <hr />
      <div className="mt-3">
        {/* user review add section  */}

        <div>
          {user?.uid && (
            <div className="flex w-full">
              <div className="hidden sm:block">{userPhoto}</div>
              <div className="w-full ml-5 mr-5 sm:mr-0">
                <div className="flex items-center">
                  <div className="sm:hidden mr-3 my-2">{userPhoto}</div>
                  <h5 className="mb-1 font-semibold text-lg text-gray-700">
                    {user?.displayName ? user.displayName : "User"}
                  </h5>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <textarea
                    name="review"
                    id=""
                    className="w-full rounded"
                    rows={2}
                    required
                  ></textarea>
                  <input
                    className="py-2 px-3 bg-purple-600 rounded-md text-white mt-3 text-sm font-medium self-end"
                    type="submit"
                    value="Add Review"
                  />
                </form>
              </div>
            </div>
          )}
        </div>

        {/* submit review section  */}

        <div className="px-3">
          {reviews &&
            // reviews looping

            reviews.map((reviewer, idx) => (
              <div key={idx} className="my-9">
                <div className="flex">
                  <div className="hidden mr-4 sm:block">
                    {reviewer?.photoURL ? (
                      <img
                        className="w-12 rounded-full"
                        src={reviewer.photoURL}
                        alt=""
                      />
                    ) : (
                      <FaUser className="text-2xl mx-auto"></FaUser>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="sm:hidden mr-3 my-2">
                        {reviewer?.photoURL ? (
                          <img
                            className="w-12 rounded-full"
                            src={reviewer.photoURL}
                            alt=""
                          />
                        ) : (
                          <FaUser className="text-2xl mx-auto"></FaUser>
                        )}
                      </div>
                      <h5 className="mb-1 font-semibold text-lg text-gray-700">
                        {reviewer?.displayName ? reviewer.displayName : "User"}
                      </h5>
                    </div>
                    <p>{reviewer.reviewValue}</p>
                  </div>
                </div>
              </div>
            ))}
          {reviews.length<=0 && (
            <div
              className={`text-2xl font-bold my-10 text-center text-purple-600`}
            >
              <h2>There are no Review</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceReview;