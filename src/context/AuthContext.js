import React from "react";
import { useContext, useState, useEffect } from "react";
import { auth } from "../server/Firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)

    const login = (email, password) => auth.signInWithEmailAndPassword(email, password)

    const logout = () => auth.signOut()

    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscriber;
    }, []);

    const value = { currentUser, signup, login, logout }

    return ( 
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
     );
}