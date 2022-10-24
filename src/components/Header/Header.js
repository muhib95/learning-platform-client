import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='bg-red-200'>
      <nav className="flex justify-center space-x-4">
  <Link to="/" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Registerer</Link>
  <Link to="/" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</Link>
 

 
      <Link className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"></Link>
  <Link className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><button>LogOut</button></Link>
   
     <Link to="/register" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Register</Link>
  <Link to="/login" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</Link>
  
  
</nav>

    </div>
  );
};

export default Header;