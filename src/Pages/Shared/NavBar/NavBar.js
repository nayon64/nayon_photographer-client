import React, { useContext, useState } from "react";
import {  NavLink } from "react-router-dom";
import logo from "../../../asset/images/camera-logo.png";
import { AuthContext } from "../../../context/AuthProvide";
import {FaUserAlt} from "react-icons/fa"

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  let activeStyle = {
    borderBottom: "2px solid purple"
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded  ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="mr-2 sm:h-12 h-6" alt="Flowbite Logo" />
          <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
            <h1 className="text-gray-700">NAYON</h1>
            <h1 className="text-green-700">PHOTOGRAPHY</h1>
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            onClick={() => setOpen(!open)}
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`relative w-full md:block md:w-auto ${open && "hidden"}`}
          id="navbar-default"
        >
          <ul className="absolute z-50 items-center w-full md:static md:items-center flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <NavLink
                to="/home"
                onClick={() => setOpen(!open)}
                className={`block text-gray-700 my-2 md:my-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 `}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setOpen(!open)}
                className="block  text-gray-700 mb-2 md:mb-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  "
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                onClick={() => setOpen(!open)}
                className="block  text-gray-700 mb-2 md:mb-0 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  "
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Blogs
              </NavLink>
            </li>

            {user?.uid ? (
              <>
                <li>
                  <NavLink
                    to="/myReviews"
                    onClick={() => setOpen(!open)}
                    className="block mb-2 md:mb-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700   "
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addService"
                    onClick={() => setOpen(!open)}
                    className="block mb-3 md:mb-0 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700   "
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={logOut} to="#" className="block">
                    <button
                      onClick={() => setOpen(!open)}
                      className="p-2 ml-2 md:ml-0 rounded md:border-0 bg-purple-700 text-white duration-500 transition-all hover:bg-purple-500"
                    >
                      Log Out
                    </button>
                  </NavLink>
                </li>
                <li className="order-first md:order-last">
                  {user?.uid && (
                    <span>
                      {user?.photoURL ? (
                        <img
                          className="w-10 rounded-full mt-4 md:mt-0"
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        <FaUserAlt></FaUserAlt>
                      )}
                    </span>
                  )}
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login" className="block">
                  <button
                    onClick={() => setOpen(!open)}
                    className={`p-2 ml-2 md:ml-0 rounded md:border-0 bg-purple-700 text-white duration-500 transition-all hover:bg-purple-400 ${({
                      isActive,
                    }) => (isActive ? "bg-lindigo-400" : undefined)}`}
                  >
                    Log in
                  </button>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
