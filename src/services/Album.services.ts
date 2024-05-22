import { Album } from "@models/album";
import { API_URL } from "@utils/constantes";
import axios from "axios";
/* RUTAS DE LA API - ENDPOINTS */
// POST - /album/search => name (string)
export async function searchAlbumsByName(query: string) {
    try {
        const response = await axios.post(API_URL+'album/search', {search: query});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// GET - /album/artist/:id
export async function getAlbumsByArtist(id:number){
    try {
      const response = await axios.get(API_URL+'album/artist/'+id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}
// POST - /form/album/ => data (Album)
export async function insertAlbum(data:Album){
    try {
      const response = await axios.post(API_URL+'form/album', data);
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
