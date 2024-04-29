import { API_URL } from "@utils/constantes";
import axios from "axios";

const URL = API_URL+ '/api/';
/* RUTAS DE LA API - ENDPOINTS */
// GET /abums

// GET /album/artist/:id
export async function getAlbumsByArtist(id:number){
    try {
      const response = await axios.get(URL+'album/artist/'+id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

/* RUTAS DE LA API - LOADERS */
export const loaderAlbums = async () => {
    try{
        const res = await axios.get(URL+'album');
        const song = await res.data;
        return song
    }catch(error){
        console.error(error);
    };
}

export const loaderAlbum = async ({params}:any) => {
    try{
        const res = await axios.get(URL+'album/'+params.id);
        const song = await res.data;
        return song
    }catch(error){
        console.error(error);
    };
}
