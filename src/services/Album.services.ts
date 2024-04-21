import axios from "axios";
import { Album } from "src/models/album";
const API_URL = "http://127.0.0.1:8000/api/";
/* RUTAS DE LA API - ENDPOINTS */
// GET /abums
// export async function getSongs() {
//     try {
//       const response = await axios.get(API_URL+'songs');
//       return response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

/* RUTAS DE LA API - LOADERS */
export const loaderAlbums = async () => {
    try{
        const res = await axios.get(API_URL+'album');
        const song = await res.data;
        console.log(song);
        return song
    }catch(error){
        console.error(error);
    };
}

// GET /songs/:id
// export const loaderSong = async ({params}:any) => {
//   try{
//     const res = await axios.get(`${API_URL}song/${params.id}`);
//     const song: Song = await res.data;
//     console.log(song);
//     return song
//   }catch(error){
//     console.error(error);
//   };
// }
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