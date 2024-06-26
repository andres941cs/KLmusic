import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import HomePage from '@pages/Home/HomePage.tsx';
import LoginPage from '@pages/Login/LoginPage.tsx';
import RegisterPage from '@pages/Register/RegisterPage.tsx';
import ProfilePage from '@pages/Profile/ProfilePage.tsx';
import SearchPage from '@pages/Search/SearchPage.tsx';

import { loaderAlbum, loaderAlbums } from '@services/Album.services.ts';
import AlbumsPage from '@pages/Album/AlbumsPage.tsx';
import AlbumPage from '@pages/Album/AlbumPage.tsx';

import SongsPage from '@pages/Song/SongsPage.tsx';
import SongPage from '@pages/Song/SongPage.tsx';
import { loaderSong } from '@services/Songs.services.ts';

import ArtistsPage from '@pages/Artist/ArtistsPage.tsx';
import ArtistPage from '@pages/Artist/ArtistPage.tsx';
import { loaderArtist, loaderArtists } from '@services/Artist.services.ts';

import PlayerPage from '@pages/Player/PlayerPage.tsx';
import { loaderKaraoke } from '@services/Karaoke.services.ts';
import KaraokesPage from '@pages/Karaoke/KaraokesPage.tsx';

import KaraokePage from '@pages/Karaoke/KaraokePage.tsx';

import NotFoundPAge from '@pages/NotFound.tsx';
import ProtectedRoute from '@pages/Login/ProtectedRoute.tsx';
import FormPage from '@pages/Forms/FormPage.tsx';
import ResetPage from "@pages/Login/ResetPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFoundPAge/>,
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
        path: "/profile",
        element: <ProfilePage></ProfilePage>,
      },
      {
        path: "/reset",
        element: <ResetPage></ResetPage>,
      },
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/songs",
        element: <SongsPage></SongsPage>,
      },
      {
        path: "/song/:id",
        element: <SongPage/>,
        loader: loaderSong
      },
      {
        path: "/artists",
        element: <ArtistsPage></ArtistsPage>,
        loader: loaderArtists
      },
      {
        path: "/artist/:id",
        element: <ArtistPage></ArtistPage>,
        loader: loaderArtist
      },
      {
        path: "/albums",
        element: <AlbumsPage></AlbumsPage>,
        loader: loaderAlbums
      },
      {
        path: "/album/:id",
        element: <AlbumPage></AlbumPage>,
        loader: loaderAlbum
      },
      {
        path: "/player/:id",
        element: <PlayerPage></PlayerPage>,
        loader: loaderKaraoke
      },
      {
        path: "/karaoke",
        element: <ProtectedRoute children={<KaraokePage/>}/>,
      },
      {
        path: "/karaokes",
        element: <ProtectedRoute children={<KaraokesPage/>}/>,
      },
      {
        path: "/forms",
        element:<ProtectedRoute children={<FormPage/>}/>,
      },

    ]
  },
  
]);

export default router;