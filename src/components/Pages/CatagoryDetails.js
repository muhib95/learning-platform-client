import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CatagoryDetails = () => {
  const {cid,title,details,photo}=useLoaderData();
  console.log(cid);
  return (
    <div className='mt-4 mx-auto  w-5/12'>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
            <div className="flex space-x-4">
		<button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800">PDF download</button>
	</div> 
	
	<div>
		<img src={photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{title}</h2>
		<p className="text-sm text-gray-400">{details}</p>
	</div>
	<div className="flex space-x-4">
		<button type="button" className="px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800"><Link to={`/checkout1/${cid}`}>Premium</Link></button>
	</div> 
</div>
    </div>
  );
};

export default CatagoryDetails;