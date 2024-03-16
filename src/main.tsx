import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import RegisterPage from './pages/Register/RegisterPage.tsx';
import SearchPage from './pages/Search/SearchPage.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        index:true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
