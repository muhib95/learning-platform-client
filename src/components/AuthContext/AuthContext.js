import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';
// context here...
export const UserContext=createContext();
// auth app get here...
const auth=getAuth(app);
const AuthContext = ({children}) => {
  // get user...
const [user,setUser]=useState(null);
// loader Headers...
const [loader,setLoader]=useState(true);


// google login
const googleLogIn=(provider)=>{
  setLoader(true);
  return signInWithPopup(auth,provider);
}
// email pass login
const logIn=(email, password)=>{
  setLoader(true);
  return signInWithEmailAndPassword(auth,email,password);

}

// current user
useEffect(()=>{
  const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
    setLoader(false);
  });
  return ()=>unSubscribe();

},[])
// LogOut here
const logOut=()=>{
  setLoader(true);
  return signOut(auth);
}

// Register here...
const register=( email, password)=>{
  return createUserWithEmailAndPassword(auth,email,password);

}

// User profile updateProfile...
const userUpdate=(profile)=>{
  return updateProfile(auth.currentUser,profile)
}
// Git login Headers...

const gitHubLogin=(provider)=>{
  setLoader(true);
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