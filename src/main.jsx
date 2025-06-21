import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
import ForgetPassword from './Pages/SignIn/ForgetPassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    ]
  },
  {
    path: "/error",
    element: <Error></Error>
  },
  {
    path: "/signin",
    element: <Error></Error>
  },
  {
    path: "/signup",
    element: <Error></Error>
  },
  {
    path: "/forgetPassword",
    element: <ForgetPassword></ForgetPassword>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
