
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Blogs from '../Pages/Blogs';
import CatagoryDetails from '../Pages/CatagoryDetails';
import Courses from '../Pages/Courses';
import Error from '../Pages/Error';
import Faq from '../Pages/Faq';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
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