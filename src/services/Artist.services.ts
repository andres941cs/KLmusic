import { API_URL } from "@utils/constantes";
import axios from "axios";
// import { Artists } from "src/models/artist";
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
export const loaderArtists = async () => {
    try{
        const res = await axios.get(API_URL+'artist');
        const artists = await res.data;
        console.log(artists);
        return artists;
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