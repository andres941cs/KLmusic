import axios from "axios";
import { API_URL } from "@utils/constants";
import { Song } from "src/models/Songs";
/* RUTAS DE LA API - ENDPOINTS */
// GET /songs
export async function getSongs() {
  try {
    const response = await axios.get(API_URL+'song');
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
    return song
  }catch(error){
    console.error(error);
  };
}
// POST - /songs/search => name (string)
export async function searchSongs(name:string){
    try {
      const response = await axios.post(API_URL+'song/search', {'name':name});
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

// GET - /songs/artists/:id
export async function getSongsByArtist(id:number){
    try {
      const response = await axios.get(API_URL+'song/artist/'+id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

// GET - /songs/albums/:id
export async function getSongsByAlbum(id:number){
    try {
      const response = await axios.get(API_URL+'song/album/'+id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

// POST - /form/song => data (Song)
export async function insertSong(data:Song){
  try {
    const response = await axios.post(API_URL+'form/song', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}