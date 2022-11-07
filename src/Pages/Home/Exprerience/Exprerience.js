import React from 'react';
import { Link } from 'react-router-dom';

const Exprerience = () => {
	return (
    <div className="grid md:grid-cols-2 gap-5 container mx-auto ">
      <div className="w-full  overflow-hidden p-4 h-96">
        <img
          className="w-full object-cover"
          src="https://images.unsplash.com/photo-1516843882936-fc08647e0ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <div className="my-auto p-4">
        <h1 className="text-4xl mb-5 font-bold text-purple-600">
          Learn About My Exprerience.
        </h1>
        <p className="text-xl text-gray-500 mb-5">
          I am working this work many year. This is my profession . I am try my
          client happy. I try give my client the best photo.
        </p>
        <Link>
          <span className="text-xl font-medium text-green-500">
            View My portfolio
          </span>
        </Link>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 grid-cols-4 mt-5">
          <div className="flex flex-col items-center">
            <span className="text-gray-800 text-4xl font-bold">450+</span>
            <span className="text-xl font-semibold text-gray-600 text-center">
              Project Complete
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-800 text-4xl font-bold">120+</span>
            <span className="text-xl font-semibold text-gray-600 text-center">
              Happy Client
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-800 text-4xl font-bold">8</span>
            <span className="text-xl font-semibold text-gray-600 text-center">
              Years Exprerience
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-gray-800 text-4xl font-bold">18</span>
            <span className="text-xl font-semibold text-gray-600 text-center">
              Awards Win
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprerience;