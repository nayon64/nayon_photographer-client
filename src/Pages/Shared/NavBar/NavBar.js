import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../asset/images/camera-logo.png"

const NavBar = () => {
	const [open,setOpen]=useState(false)
	return (
		<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<Link to="/" className="flex items-center">
				<img src={logo} className="mr-2 sm:h-12 h-6" alt="Flowbite Logo" />
				<span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
					<h1 className="text-gray-700">NAYON</h1>
					<h1 className="text-green-700">PHOTOGRAPHY</h1>
				</span>
				</Link>
				<button
				data-collapse-toggle="navbar-default"
				type="button"
				className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
				<ul className="absolute w-full md:static md:items-center flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
					<Link
						to="/home"
						className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						aria-current="page"
					>
						Home
					</Link>
					</li>
					<li>
					<Link
						to="/blogs"
						className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					>
						Blogs
					</Link>
					</li>
					<li>
					<Link
						to="/myReviews"
						className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					>
						My Reviews
					</Link>
					</li>
					<li>
					<Link
						to="/addService"
						className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					>
						Add Service
					</Link>
					</li>
					<li>
					<Link to="#" className="block">
						<button className="p-2 ml-2 md:ml-0 rounded md:border-0 bg-purple-700 text-white">Log Out</button>
					</Link>
					</li>
				</ul>
				</div>
			</div>
		</nav>
  );
};

export default NavBar;