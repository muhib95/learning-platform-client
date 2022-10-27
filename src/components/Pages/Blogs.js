import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h2 className='text-center mt-3 text-4xl text-red-400'>Blogs</h2>
      <div className='md:grid md:grid-cols-2 gap-4 container mx-auto mt-5'>
        <div className='p-8 border-solid border-2 border-sky-500 mt-3'>
          <h3 className='text-2xl text-red-400'> what is cors?</h3>
          <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
        </div>
        <div>
        <div className='p-8 border-solid border-2 border-sky-500 mt-3'>
          <h3 className='text-2xl text-red-400'>Why are you using firebase? What other options do you have to implement authentication?</h3>
          <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code.</p>
          <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through sign in with apple, multi-factor authentication, phonenumber, and SAML Auth.</p>
        </div>
        </div>
        <div>
        <div className='p-8 border-solid border-2 border-sky-500 mt-3'>
          <h3 className='text-2xl text-red-400'>How does the private route work?</h3>
          <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
         
        </div>
        </div>
        <div>
        <div className='p-8 border-solid border-2 border-sky-500 mt-3'>
          <h3 className='text-2xl text-red-400'>What is Node? How does Node work?</h3>
          <p>A node is a point of intersection/connection within a data communication network. In an environment where all devices are accessible through the network, these devices are all considered nodes. The individual definition of each node depends on the type of network it refers to.</p>
          <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
         
        </div>
        </div>

      </div>
    </div>
  );
};

export default Blogs;