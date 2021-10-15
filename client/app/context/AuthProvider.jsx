import React, { useState } from 'react';
// import AsyncStorage from "@react-native-async-storage/async-storage";

// import { userSignInAPI, userSignUpAPI } from "../../api/auth";
import AuthContext from './AuthContext';
// import { USER_TOKEN } from "./constants";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(null);

    return (
        <AuthContext.Provider value={{ authState, setAuthState }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
