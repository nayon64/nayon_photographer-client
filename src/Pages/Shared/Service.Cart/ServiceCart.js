import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCart = ({ service }) => {
  const { title, about, picture, price, rating, _id } = service;
  
  
  return (
    <div className="block border rounded-xl overflow-hidden">
      <div className="h-48">
        <PhotoProvider>
          <PhotoView src={picture}>
            <img className="h-full object-cover w-full" src={picture} alt="" />
          </PhotoView>
        </PhotoProvider>
      </div>

      <div>
        <div className="py-4 px-3 flex flex-col justify-between ">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-700 dark:text-white">
              {title}
            </h2>
            <p className="mt-2 text-sm text-gray-500 ">
              {about.length > 100 ? <>{about.slice(0, 100) + `...`}</> : about}
            </p>
            <p>{rating}</p>
            <p className="text-lg text-gray-800 font-medium">
              Price :{" "}
              {price <= 10 ? (
                <span>${price} /per image</span>
              ) : (
                <span>${price} Full Event</span>
              )}
            </p>
          </div>
          <Link id={_id} to={`/serviceDetails/${_id}`}>
            <button className="bg-purple-700 p-2 mt-3  font-medium text-white rounded-md text-sm duration-400 transition-all hover:bg-purple-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;