import React, { createContext, useState } from 'react';


export const AuthContext = createContext()

const AuthProvide = ({ children }) => {
	
	const userInfo={displayName:"milton"}
	return (
		<AuthContext.Provider value={userInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvide;