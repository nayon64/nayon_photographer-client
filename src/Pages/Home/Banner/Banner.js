import React from 'react';
import {  toast } from "react-toastify";

const Banner = () => {

  const handleHired = () => {
    toast.success("This button funcion is constructing");
    console.log("click me");
  };
  
	return (
    <div className="relative flex flex-col-reverse py-16 lg:max-h-96 lg:pt-0 lg:flex-col lg:pb-0 container mx-auto">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl  px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.unsplash.com/photo-1639300620865-b06d833fd709?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl ">
        <div className="mb-16 lg:my-10 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-400">
            Wedding Season
          </p>
          <h2
            className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none 
		  "
          >
            BANGLADESH EDITORIAL <br></br> <span>WEDDING PHOTOGRAPHER</span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Hey! Welcome to my photography website . I am a professional
            photographer. I am working every where in bangladesh.
          </p>
          <div className="flex items-center">
            <button
              onClick={handleHired}
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-700 hover:bg-purple-500 focus:shadow-outline focus:outline-none"
            >
              Get Hired
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;