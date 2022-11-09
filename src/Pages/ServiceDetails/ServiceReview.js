import React, { useContext } from 'react';
import {  FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvide';

const ServiceReview = () => {

	const { user } = useContext(AuthContext)
	const { displayName, photoURL } = user;
	console.log(user)
	const reviews="England go into a blockbuster semi-final clash with red-hot India at the Twenty20 World Cup on Thursday high on confidence after Ben Stokes's batting heroics.The Adelaide Oval is expected to be sold out for a clash of the titans between the two top-ranked T20 teams in the world.Jos Buttler's second-ranked England, the reigning 50-over world champions are gaining momentum after a less-than convincing win over Afghanistan, a shock defeat to Ireland in a rain-hit match and a washout against Australia left them having to win their final two Super 12 matches.They outplayed New Zealand before an unbeaten 42 by Test captain Stokes, whose selection for the T20 team had come under fire, ensured a tense win over Sri Lanka to secure a semi-final berth."

	const userPhoto = (
    <>
      {user?.photoURL ? (
        <img className="w-12 rounded-full" src={photoURL} alt="" />
      ) : (
        <FaUser></FaUser>
      )}
    </>
  );
	return (
    <div className="mt-10">
      <div className="flex justify-between items-center my-3">
        <h1 className="text-3xl font-bold text-gray-700">Reviews</h1>
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
                    {user?.displayName ? displayName : "User"}
                  </h5>
                </div>
                <form className="flex flex-col">
                  <textarea
                    name="review"
                    id=""
                    className="w-full rounded"
                    rows={2}
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

        <div>
          <div className="flex">
            <div className="hidden w-96 sm:block">{userPhoto}</div>
            <div>
              <div className='flex items-center'>
                <div className="sm:hidden mr-3 my-2">{userPhoto}</div>
                <h5 className="mb-1 font-semibold text-lg text-gray-700">
                  {user?.displayName ? displayName : "User"}
                </h5>
              </div>
			        <p>{reviews}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceReview;