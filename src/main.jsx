import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './Components/Layout/Layout.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
const router = createBrowserRouter([
  { path: '/', 
    errorElement:<ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      {
        path:'/home',
        element:<Home></Home>
      }
    ]
    
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
