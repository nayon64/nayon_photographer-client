import React from "react";
import { FaStar,FaStarHalf } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceSection = ({ service }) => {
	const { title, about, picture, price, rating,  } = service;
  return (
    <div className="relative flex justify-center md:items-center flex-col-reverse py-3 md:py-6 lg:pt-0 lg:h-96 md:flex-row lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className=" lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-3">
            <div>
              <p className="inline-block px-3 py-px mb-3 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                New Colaboration
              </p>
            </div>
            <h2 className="max-w-lg mb-3 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {title}
            </h2>
            <p className="text-base text-gray-700 md:text-md">{about}</p>
          </div>
          <div className="flex flex-col items-center md:justify-between md:flex-row">
            <p className="text-lg text-gray-800 font-medium">
              Price :{" "}
              {price <= 10 ? (
                <span>${price} /per image</span>
              ) : (
                <span>${price} Full Event</span>
              )}
            </p>
			<span className="flex items-center"><FaStar></FaStar> <FaStarHalf></FaStarHalf> { rating}</span>
          </div>
          <Link>
            <button className="py-2 px-3 bg-purple-600 rounded-md text-white mt-3 text-sm font-medium">HIRED ME</button>
          </Link>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded-lg shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={picture}
          alt=""
        />
      </div>
    </div>
  );
};

export default ServiceSection;
