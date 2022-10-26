import React from 'react';
import { Link } from 'react-router-dom';

const Module = ({module}) => {
  const {id,title,card,photo,review}=module;
  
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100" style={{height:'650px'}}>
	
	<div>
		<img src={photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{title}</h2>
		<p className="text-sm text-gray-400">{card.slice(0,150)}</p>
	</div>
	<div className="flex flex-wrap justify-between">
		<div className="space-x-2">
		<Link to={`/module/${id}`}><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Details</button></Link>
		</div>
		<div className="flex space-x-2 text-sm text-gray-400">
			<p>Videos:{review.videos}</p>
		<p>Ratting:{review.ratting}</p>
		</div>
	</div>
</div>
      
    </div>
  );
};

export default Module;