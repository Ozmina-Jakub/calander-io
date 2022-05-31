import React from "react";
import { useContext, useState, useEffect } from "react";
import { auth } from "../server/Firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => setCurrentUser(user));
        return unsubscriber;
    }, []);

    const value = {
        currentUser,
        signup
    }

    return ( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
     );
}