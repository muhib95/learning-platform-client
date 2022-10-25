
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
        loader:()=>fetch('http://localhost:5000/modules')
      },
      {
        path:'/catagories/:id',
        element:<CatagoryDetails></CatagoryDetails>,
        loader:({params})=>fetch(`http://localhost:5000/catagories/${params.id}`)
      },
      {
        path:'/module/:id',
        element:<ModuleDetails></ModuleDetails>,
        loader:({params})=>fetch(`http://localhost:5000/modules/${params.id}`)

      },
      {
        path:'/checkout/:id',
        element:<CheckOut></CheckOut>,
        loader:({params})=>fetch(`http://localhost:5000/checkout/${params.id}`)

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