import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';
export const UserContext=createContext();
const auth=getAuth(app);
const AuthContext = ({children}) => {
const [user,setUser]=useState([]);
const googleLogIn=(provider)=>{
  return signInWithPopup(auth,provider);
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



 
const info={user,googleLogIn,logOut};

  return (
<UserContext.Provider value={info}>
{children}
</UserContext.Provider>
  );
};

export default AuthContext;