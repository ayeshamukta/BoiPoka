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
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
const router = createBrowserRouter([
  { 
    path: '/', 
    errorElement:<ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/books/:bookId',
        loader:()=>fetch(`/public/booksData.json`),
        element:<BookDetails></BookDetails>

      },
      {
        path:'/listedBooks',
        loader:()=>fetch(`/booksData.json`),
        element:<ListedBooks></ListedBooks>

      },
      
    ]
    
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
