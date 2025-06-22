import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import SignIn from './Pages/SignIn/SignIn';
import ForgetPassword from './Pages/SignIn/ForgetPassword';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import TaskList from './Pages/TaskList/TaskList';
import Spin from './Pages/Spin/Spin';
import SingleTask from './Pages/TaskList/SingleTask';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children:[
      {
        path: "/",
        element: <SignIn></SignIn>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/dashboard",
        element: <Home></Home>,
        children: [
          {
            path: "/dashboard",
            element: <TaskList></TaskList>
          },
          {
            path: "/dashboard/spin",
            element: <Spin></Spin>
          },
          {
            path: "/dashboard/task/:id",
            element: <SingleTask></SingleTask>
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
