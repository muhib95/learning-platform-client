import { UserContext } from '../AuthContext/AuthContext';
import React, { useContext} from 'react';
import { Navigate, useLocation } from "react-router-dom";

// Here is private route

const PrivateRoute = ({children}) => {
const {user,loader}=useContext(UserContext);
const location = useLocation();
console.log(user);
if(loader){
  console.log('yes loading found');
  return <div>Loading...</div>
}
if(user && user.uid){
return children;
}

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;