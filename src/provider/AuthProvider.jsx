import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // Crete User
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // LogIn User
    const logInUserAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LogOut User
    const logOutUser = () => {
        return signOut(auth)
    }

    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = { user, setUser, createNewUser, logOutUser, logInUserAccount }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;