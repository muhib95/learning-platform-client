import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../AuthContext/AuthContext';
const Header = () => {
  const {user,logOut}=useContext(UserContext);
  const handleLogOut=()=>{
    logOut()
    .then(() => {
     
    }).catch((error) => {
      
    });
  }
  console.log(user);
  return (
    <div className='bg-red-200'>
      <nav className="flex justify-center space-x-4">
  <Link to="/" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Tutor Expart</Link>
  <Link to="/" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</Link>
  <Link to="/courses" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Courses</Link>
  <Link to="/faq" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">FAQ</Link>
  <Link to="/blogs" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Blogs</Link>
  <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
	<span>Light</span>
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-violet-400"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
	</span>
	<span>Dark</span>
</label>
{
  !user?
  <>
   <Link to="/register" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Register</Link>
  <Link to="/login" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</Link>
  </>
  :
  <Link className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><button onClick={handleLogOut}>LogOut</button></Link>

}
 
 
   
    {
      user?.photoURL?
      <img className='w-9 rounded-full' src={user?.photoURL} alt="" title={user?.displayName} />
      :
      <p>None</p>
    }
  
  
</nav>

    </div>
  );
};

export default Header;