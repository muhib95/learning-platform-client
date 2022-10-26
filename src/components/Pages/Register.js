import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../AuthContext/AuthContext';
const Register = () => {
const {register}=useContext(UserContext);
console.log(register);
	const handleRegister=(event)=>{
		event.preventDefault();
		const form=event.target;
		const email=form.email.value;
		const password=form.password.value;
		register(email,password)
		.then((result) => {
			form.reset();
		})
		.catch((error) => {
			form.reset();
		
		});

	}
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100 mx-auto mt-3">
	<h1 className="text-2xl font-bold text-center">Register</h1>
	<form noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleRegister}>
		   <div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-400">Full name</label>
			<input type="text" name="fullname" id="fullname" placeholder="full name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-100 text-black focus:border-violet-400" />
		</div>
    <div className="space-y-1 text-sm">
			<label htmlFor="photourl" className="block text-gray-400">Photo URL</label>
			<input type="text" name="photo" id="photo" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-100 text-black focus:border-violet-400"/>
		</div>
    <div className="space-y-1 text-sm">
			<label htmlFor="useremail" className="block text-gray-400">Email</label>
			<input type="email" name="email" id="email" placeholder="enter email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-100 text-black focus:border-violet-400" required/>
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-slate-100 text-black focus:border-violet-400" required/>
			
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Register</button>
	</form>
	
	
	<p className="text-xs text-center sm:px-6 text-gray-400">already have an account?
		<Link to='/login' rel="noopener noreferrer"  className="underline text-gray-100">Login</Link>
	</p>
</div>
    </div>
  );
};

export default Register;