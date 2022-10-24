
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Blogs from '../Pages/Blogs';
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
        element:<Courses></Courses>
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