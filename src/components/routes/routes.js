
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Blogs from '../Pages/Blogs';
import CatagoryDetails from '../Pages/CatagoryDetails';
import CheckOut from '../Pages/CheckOut';
import Courses from '../Pages/Courses';
import Error from '../Pages/Error';
import Faq from '../Pages/Faq';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ModuleDetails from '../Pages/ModuleDetails';
import Register from '../Pages/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/courses',
        element:<Courses></Courses>,
        loader:()=>fetch('https://b610-lerning-platform-server-side-muhib95.vercel.app/modules')
      },
      {
        path:'/catagories/:id',
        element:<CatagoryDetails></CatagoryDetails>,
        loader:({params})=>fetch(`https://b610-lerning-platform-server-side-muhib95.vercel.app/catagories/${params.id}`)
      },
      {
        path:'/module/:id',
        element:<ModuleDetails></ModuleDetails>,
        loader:({params})=>fetch(`https://b610-lerning-platform-server-side-muhib95.vercel.app/modules/${params.id}`)

      },
      {
        path:'/checkout/:id',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader:({params})=>fetch(`https://b610-lerning-platform-server-side-muhib95.vercel.app/checkout/${params.id}`)

      },
      {
        path:'/checkout1/:id',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader:({params})=>fetch(`https://b610-lerning-platform-server-side-muhib95.vercel.app/checkout1/${params.id}`)

      },
      {
        path:'/faq',
        element:<Faq></Faq>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }
]);