import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LoginPage from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import RegisterPage from './pages/Register/RegisterPage.tsx';
import SearchPage from './pages/Search/SearchPage.tsx';
import PlayerPage from './pages/Player/PlayerPage.tsx';
import ArtistPage, { loaderArtist } from './pages/Artist/ArtistPage.tsx';
import KaraokePage from './pages/Karaoke/KaraokePage.tsx';
import SongPage from './pages/Song/SongPage.tsx';
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
      {
        path: "/song",
        element: <SongPage></SongPage>,
      },
      {
        path: "/artist/:id",
        element: <ArtistPage></ArtistPage>,
        loader: loaderArtist
      },
      {
        path: "/player",
        element: <PlayerPage></PlayerPage>,
      },
      {
        path: "/karaoke",
        element: <KaraokePage></KaraokePage>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
