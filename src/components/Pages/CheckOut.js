import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
  const {title}=useLoaderData();
  return (
    <div className='bg-gray-500 text-white w-2/3 mx-auto mt-3'>
      <h2 className='text-3xl mb-2'>CheckOut here</h2>
      <h2 className='text-2xl'>{title}</h2>
      
    </div>
  );
};

export default CheckOut;