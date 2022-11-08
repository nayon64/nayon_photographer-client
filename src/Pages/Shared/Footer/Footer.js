import React from 'react';
import { FaTwitterSquare,FaFacebookSquare,FaInstagramSquare} from "react-icons/fa";
const Footer = () => {
	return (
    <div >
      <div className="container border-t-4 border-indigo-500 mx-auto flex flex-col items-center py-5">
        <div>
          <h2>Social Media Links</h2>
          <div className="flex">
            <a href="https://www.facebook.com/">
              <FaFacebookSquare className="text-5xl text-blue-700" />
            </a>
            <a href="https://twitter.com/">
              <FaTwitterSquare className="text-5xl text-blue-500" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagramSquare className="text-5xl text-rose-500" />
            </a>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-600 mt-5">
          © Copyright 2022 NayonPhotography. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;