import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const UserContext=createContext();
const auth=getAuth(app);
const AuthContext = ({children}) => {
const [user,setUser]=useState(null);
const [loader,setLoader]=useState(true);
const googleLogIn=(provider)=>{
  return signInWithPopup(auth,provider);
}
const logIn=(email, password)=>{
  setLoader(true);
  return signInWithEmailAndPassword(auth,email,password);

}
useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    setLoader(false);
  });
  return ()=>unSubscribe();

},[])
const logOut=()=>{
  return signOut(auth);
}
const register=( email, password)=>{
  return createUserWithEmailAndPassword(auth,email,password);

}

const userUpdate=(profile)=>{
  return updateProfile(auth.currentUser,profile)
}

const gitHubLogin=(provider)=>{
  return signInWithPopup(auth,provider);
}



 
const info={user,googleLogIn,gitHubLogin,logIn,logOut,register,userUpdate,loader};

  return (
<UserContext.Provider value={info}>
{children}
</UserContext.Provider>
  );
};

export default AuthContext;