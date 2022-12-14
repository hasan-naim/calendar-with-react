import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext({});

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (crntUsr) => {
      setUser(crntUsr);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logIn = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signIn = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    signIn,
    logIn,
    logOut,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
