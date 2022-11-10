import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvide";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import googleImg from "../../asset/images/google.png";
import { GoogleAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
	const { createUser, updateUserProfile, signInWithProvider } =
    useContext(AuthContext);
	const [showPassword,setShowPassword]=useState(false)
	const [showConfirmdPassword,setShowConfirmdPassword]=useState(false)
	const [error, setError] = useState('')
	const [passwordError,setPasswordError]=useState('')
  const [confirmdPassword, setConfirmdPassword] = useState("");

  // google provider for log in  
  const googleProvider = new GoogleAuthProvider();
  
  // google sing in function 
  const handleGoogleSignIn = () => {
    signInWithProvider(googleProvider)
      .then((result) => {
        const user = result.user;
        const currentUser = { userUid: user.uid };

        // fetch token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user-token", data.token);
            setError("");
            
            toast.success("Succesfully google login");
           
          });
        
        
        // toast.success("Succesfully google login");
        // setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

	
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
	const confirmPassword = form.confirmPassword.value;
	  
	setError('')

	//   password regex 
	  
	if (!/.*[a-z]/.test(password)) {
		setPasswordError("Enter a Lowercase ");
		return;
	}
	if (!/.*[A-Z]/.test(password)) {
		setPasswordError("Enter a Uppercase");
		return;
	}
	if (!/.*[0-9]/.test(password)) {
		setPasswordError("Enter a  number");
		return;
	}
	if (!/.{8,}/.test(password)) {
		setPasswordError("Enter minimum 8 charecters");
		return;
	}
		
		//   match password and confirmPassword 
	  
	if (password !== confirmPassword) {
			setPasswordError("");
			setConfirmdPassword("Password doesnot match")
			return;
		}  
			
	//   create user by email and password 
	  
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = { userUid: user.uid };

        // fetch token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("user-token", data.token);
            setError("");
            setConfirmdPassword("")
            setPasswordError("");
            toast.success("Succesfully Registration Complete");
            updateUserProfile({
              displayName: name,
              photoURL:photoUrl
            })
          });
      })
        
		.catch((err) => {
		  const errorMessage = err.message;
			setError(errorMessage);
			setConfirmdPassword("");
     		setPasswordError("");
      });
  };

  return (
    <div className="max-w-md mx-auto border-2 rounded-lg p-6 my-12">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <h1 className="text-center text-2xl font-bold text-purple-600">
        Registration Form
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            First name
          </label>
          <input
            name="firstName"
            type="text"
            id="first_name"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Last name
          </label>
          <input
            name="lastName"
            type="text"
            id="last_name"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="website"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Photo URL
          </label>
          <input
            type="url"
            name="photoUrl"
            id="website"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="photo URL"
          />
        </div>
        <div className="mb-6">
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
        {error && <p className="text-rose-600 -mt-2 mb-3">{error}</p>}
        <div className="mb-6">
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
        {passwordError && (
          <p className="text-rose-600 -mt-2 mb-3">{passwordError}</p>
        )}
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Confirm password
          </label>
          <div className="relative flex items-center">
            <input
              type={showConfirmdPassword ? "text" : "password"}
              name="confirmPassword"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirmd Your Password"
              required
            />
            <span
              onClick={() => setShowConfirmdPassword(!showConfirmdPassword)}
              className="absolute right-3 text-xl"
            >
              {showConfirmdPassword ? (
                <FaEye></FaEye>
              ) : (
                <FaEyeSlash></FaEyeSlash>
              )}
            </span>
          </div>
        </div>
        {confirmdPassword && (
          <p className="text-rose-600 -mt-2 mb-3">{confirmdPassword}</p>
        )}
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            I agree with the{" "}
            <Link
              to=""
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </form>

      <p className="mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-purple-600 font-semibold text-md">
          Log in
        </Link>
      </p>
      <p className="font-bold my-3 text-red-700 text-lg text-center">
        <span>&#8592;</span> OR <span>&#8594;</span>
      </p>
      <div
        onClick={handleGoogleSignIn}
        className="border-2 rounded-lg flex justify-center cursor-pointer items-center"
      >
        <img className="w-6 py-2" src={googleImg} alt="" />
        <span className="text-base ml-2 font-semibold">Log in with Google</span>
      </div>
    </div>
  );
};

export default Register;
