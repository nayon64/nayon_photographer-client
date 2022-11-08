import React, { createContext, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import app from '../firebase/firebase.config';


export const AuthContext = createContext()

const auth=getAuth(app)

const AuthProvide = ({ children }) => {
	
	const [user, setUser] = useState({})
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth,email,password)
	}
	const userInfo = { displayName: "milton", createUser };
	return (
		<AuthContext.Provider value={userInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvide;