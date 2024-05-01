import { API_URL } from "@utils/constantes";
import axios from "axios";
/* RUTAS DE LA API - ENDPOINTS */
// GET /abums

// GET /album/artist/:id
export async function getAlbumsByArtist(id:number){
    try {
      const response = await axios.get(API_URL+'album/artist/'+id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

/* RUTAS DE LA API - LOADERS */
export const loaderAlbums = async () => {
    try{
        const res = await axios.get(API_URL+'album');
        const song = await res.data;
        return song
    }catch(error){
        console.error(error);
    };
}

export const loaderAlbum = async ({params}:any) => {
    try{
        const res = await axios.get(API_URL+'album/'+params.id);
        const song = await res.data;
        return song
    }catch(error){
        console.error(error);
    };
}
