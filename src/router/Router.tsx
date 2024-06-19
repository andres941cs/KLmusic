import { createBrowserRouter } from "react-router-dom";

import HomePage from '@pages/Home/HomePage';
import LoginPage from "@pages/Login/LoginPage";
import RegisterPage from "@pages/Register/RegisterPage";
import ProfilePage from "@pages/Profile/ProfilePage";
import ResetPage from "@pages/Login/ResetPage";

import AlbumsPage from '@pages/Album/AlbumsPage';
import AlbumPage from '@pages/Album/AlbumPage';
import { loaderAlbum, loaderAlbums } from '@services/AlbumData';

import SongsPage from '@pages/Song/SongsPage';
import SongPage from '@pages/Song/SongPage';
import { loaderSong } from '@services/SongData';

import ArtistsPage from '@pages/Artist/ArtistsPage';
import ArtistPage from '@pages/Artist/ArtistPage';
import { loaderArtist, loaderArtists } from '@services/ArtistData';

import PlayerPage from '@pages/Player/PlayerPage';
import { loaderKaraoke } from '@services/KaraokeData';
import KaraokesPage from '@pages/Karaoke/KaraokesPage';
import KaraokePage from '@pages/Karaoke/KaraokePage';
import FormPage from '@pages/Forms/FormPage';

import NotFoundPAge from './NotFound';
import ProtectedRoute from "./ProtectedRoute";
import App from "@components/App/App";
import SearchPage from "@pages/Search/SearchPage";
import { FilterProvider } from "@context/Filter";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFoundPAge/>,
    children:[
      {
        index:true,
        element: <HomePage/>,
      },
      {
        path: "/search",
        element: <FilterProvider children={<SearchPage/>}/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      },
      {
        path: "/profile",
        element: <ProfilePage/>,
      },
      {
        path: "/reset",
        element: <ResetPage/>,
      },
      {
        path: "/songs",
        element: <SongsPage/>,
      },
      {
        path: "/song/:id",
        element: <SongPage/>,
        loader: loaderSong
      },
      {
        path: "/artists",
        element: <ArtistsPage/>,
        loader: loaderArtists
      },
      {
        path: "/artist/:id",
        element: <ArtistPage/>,
        loader: loaderArtist
      },
      {
        path: "/albums",
        element: <AlbumsPage/>,
        loader: loaderAlbums
      },
      {
        path: "/album/:id",
        element: <AlbumPage/>,
        loader: loaderAlbum
      },
      {
        path: "/player/:id",
        element: <PlayerPage/>,
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