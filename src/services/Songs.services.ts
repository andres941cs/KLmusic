import axios from "axios";
import { Song } from "src/models/songs";
const API_URL = "http://127.0.0.1:8000/api/";
/* RUTAS DE LA API - ENDPOINTS */
// GET /songs
export async function getSongs() {
    try {
      const response = await axios.get(API_URL+'songs');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
// GET /songs/:id
export const loaderSong = async ({params}:any) => {
  try{
    const res = await axios.get(`${API_URL}song/${params.id}`);
    const song: Song = await res.data;
    console.log(song);
    return song
  }catch(error){
    console.error(error);
  };
}
// POST /songs/search
export async function searchSongs(name:string){
    try {
      const response = await axios.post(API_URL+'song/search', {'name':name});
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

// GET /songs/artists/:id
export async function getSongsByArtist(id:number){
    try {
      const response = await axios.get(API_URL+'song/artist/'+id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

// GET /songs/albums/:id
export async function getSongsByAlbum(id:number){
    try {
      const response = await axios.get(API_URL+'song/album/'+id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

/* LOADERS */
// export  async function loaderSong ({params}:any)  {
//   try{
//     const res = await axios.get(`${API_URL}song/${params.id}`);
    
//     const song: Song = await res.data;
//     console.log(song);
//     return song
//   }catch(error){
//     console.error(error);
//   };
// }
// export default loaderSong;