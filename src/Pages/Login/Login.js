import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from '../../context/AuthProvide';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const {signIn} =useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email=form.email.value
    const password = form.password.value
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        form.reset()
        toast.success("Log in successfull");
        setError('')
      })
      .catch(err => {
        const errorMessage = err.message;
        console.log(errorMessage)
        setError(errorMessage)
    })
  }
  
	return (
    <div className="max-w-md mx-auto border-2 rounded-lg p-6 my-12">
      <h1 className="text-center text-2xl font-bold text-purple-600">
        User Log in
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="user@company.com"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-xl"
            >
              {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>
        </div>
        {error && <p className="text-rose-600 -mt-2 mb-3">{error}</p>}

        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
      </form>

      <p className="mt-6">
        Create an accounte?{" "}
        <Link to="/register" className="text-purple-600 font-semibold text-md">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;