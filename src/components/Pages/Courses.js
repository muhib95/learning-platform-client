import React, { useEffect, useState } from 'react';
import CatagoryList from './CatagoryList';
const Courses = () => {
  const [catagories,setCatagories]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/catagories')
    .then(res=>res.json())
    .then(data=>setCatagories(data))
  },[])
  return (
    <div className="flex flex-row container mx-auto  mt-3">
    <div className='mr-8'>
     <h1 className='mb-1'>Catagorys: {catagories.length}</h1>
      <div>
      {
        catagories.map(ca=><CatagoryList key={ca.id} name={ca.name}></CatagoryList>)
      }
      </div>
     
      </div>
    
    <div className="border border-sky-500">09</div>
  </div>
  );
};

export default Courses;