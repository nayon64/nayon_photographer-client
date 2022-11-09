import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvide';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext)
	const location =useLocation()
	if (loading) {
		<Spinner aria-label="Default status example" />;
	}
	if (user) {
		return children;
	}
	return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;