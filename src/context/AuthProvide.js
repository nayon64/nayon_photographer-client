import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,signOut,updateProfile, signInWithPopup} from "firebase/auth"
import app from '../firebase/firebase.config';


export const AuthContext = createContext()

const auth=getAuth(app)

const AuthProvide = ({ children }) => {
	
	const [user, setUser] = useState({})
	const [loading,setLoading]=useState(false)

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
		setLoading(true);
		return createUserWithEmailAndPassword(auth,email,password)
	}

	// signin with email and password 
	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth,email,password)
	}

	// signIn with provider
	const signInWithProvider = (provider) => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	}

	// sing out 
	const logOut = () => {
		setLoading(true);
		return signOut(auth)
	}

	// update user profiel 
	const updateUserProfile = profile => {
		setLoading(true);
    	return updateProfile(auth.currentUser, profile);
	};
	
	const userInfo = { user, createUser, signIn, logOut, updateUserProfile,signInWithProvider,loading,setLoading };
	return (
		<AuthContext.Provider value={userInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvide;