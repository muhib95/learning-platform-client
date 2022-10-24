import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryList from './CatagoryList';
import Module from './Module';
const Courses = () => {
  const modules=useLoaderData();
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
    <div>
      <h2>All Modules</h2>
    <div className='grid md:grid-cols-2 gap-2 mt-2'>

{
  modules.map(module=><Module key={module.id} module={module}></Module>)
}
    </div>
    </div>
 
  </div>
  );
};

export default Courses;