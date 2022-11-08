import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,signOut,updateProfile} from "firebase/auth"
import app from '../firebase/firebase.config';


export const AuthContext = createContext()

const auth=getAuth(app)

const AuthProvide = ({ children }) => {
	
	const [user, setUser] = useState({})
	const [loading,setLoading]=useState(true)

	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, currentUser => {
			if (createUser) {
				setUser(currentUser)
				setLoading(false)
			}
		})
		return ()=>unSuscribe()
	})

	// create user with eamil and password 
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth,email,password)
	}

	// signin with email and password 
	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth,email,password)
	}

	// sing out 
	const logOut = () => {
		return signOut(auth)
	}

	// update user profiel 
	const updateUserProfile = profile => {
    return updateProfile(auth.currentUser, profile);
  };
	const userInfo = { user, createUser, signIn, logOut, updateUserProfile };
	return (
		<AuthContext.Provider value={userInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvide;