import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvide';

const MyReviews = () => {

	const [reviews, setReviews] = useState([])
	const {user}=useContext(AuthContext)

	useEffect(() => {
		fetch(`http://localhost:5000/myReviews/${user.uid}`)
			.then((res) => res.json())
			.then((data) => {
				setReviews(data);
			});
	}, [user.uid]);

	// reviews delete function 
	const handleDelete = (id) => {
		const agree = window.confirm("Confirm delete your review")
		if (agree) {
			fetch(`http://localhost:5000/myReviews/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {

					if (data.deletedCount > 0) {
						const storeReviews = [...reviews];
						const remainigReview = storeReviews.filter(
						(storeReview) => storeReview._id !== id
						);
						setReviews(remainigReview);
						toast.success("Review deleted");
					}
				});
		}
	}
	return (
    <div>
      <Helmet>
        <title>Your Reviews</title>
      </Helmet>
      <div className={`min-h-[45vh] flex justify-center`}>
        <div
          className={`max-w-2xl mx-auto ${reviews <= 0 ? "hidden" : "block"}`}
        >
          <h1 className="text-xl font-semibold mt-6 mb-3 text-center text-purple-600">
            Your Reviews
          </h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-700 ">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Service Name
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs  font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                        >
                          Review
                        </th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {reviews &&
                        reviews.map((review) => (
                          <tr key={review._id} className="hover:bg-gray-100 ">
                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                              {review.ServiceTitle}
                            </td>
                            <td className="py-4 px-6 max-w-lg text-sm whitespace-normal font-medium text-gray-500  dark:text-white">
                              {review.reviewValue}
                            </td>

                            <td className="py-2 px-3 text-sm font-medium text-right whitespace-nowrap">
                              <Link to={`/updateReviews/${review._id}`}>
                                <button className="text-blue-600 dark:text-blue-500 hover:underline">
                                  Edit
                                </button>
                              </Link>
                            </td>
                            <td className="py-2 px-3 text-sm font-medium text-right whitespace-nowrap">
                              <button
                                onClick={() => handleDelete(review._id)}
                                className="text-blue-600 dark:text-blue-500 hover:underline"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${reviews <= 0 ? "block" : "hidden"} self-center`}>
          <p className="text-4xl font-bold text-purple-600">
            No Reviews were added.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;