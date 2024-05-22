import axios from "axios";
import { API_URL } from "@utils/constantes";
import { Song } from "src/models/songs";
/* RUTAS DE LA API - ENDPOINTS */
// GET /songs
export async function getSongs() {
  try {
    const response = await axios.get(API_URL+'songs');
    // response.data.forEach((song:Song) => {
    //   song.image = URL_SERVER + song.image;
    //   console.log(song.image)
    // });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
// POST /search => search:name
// export async function searchSongByName(query: string) {
//   try {
//       const response = await axios.post(API_URL+'song/search', {search: query});
//       return response.data;
//   } catch (error) {
//       console.error(error);
//   }
// }
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