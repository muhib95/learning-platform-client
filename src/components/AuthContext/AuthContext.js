import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const UserContext=createContext();
const auth=getAuth(app);
const AuthContext = ({children}) => {
const [user,setUser]=useState([]);
const googleLogIn=(provider)=>{
  return signInWithPopup(auth,provider);
}
const logIn=(email, password)=>{
  return signInWithEmailAndPassword(auth,email,password);

}
useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  });
  return ()=>unSubscribe();

},[])
const logOut=()=>{
  return signOut(auth);
}
const register=( email, password)=>{
  return createUserWithEmailAndPassword(auth,email,password);

}



 
const info={user,googleLogIn,logIn,logOut,register};

  return (
<UserContext.Provider value={info}>
{children}
</UserContext.Provider>
  );
};

export default AuthContext;