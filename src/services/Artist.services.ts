import { Artist } from "@models/artist";
import { API_URL } from "@utils/constantes";
import axios from "axios";

/* RUTAS DE LA API - ENDPOINTS */
export async function searchArtistByName(query: string) {
    try {
        const response = await axios.post(API_URL+'artist/search', {search: query});
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function insertArtist(artist: Artist) {
    try {
        const response = await axios.post(API_URL+'form/artist', artist);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

/* RUTAS DE LA API - LOADERS */
export const loaderArtist = async ({params}:any) => {
    
    const URL =`${API_URL}artist/${params.id}`;
    const res = await fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch(error => {
        console.error("Error during fetch operation:", error);
    });
    return res;
}

export const loaderArtists = async () => {
    try{
        const res = await axios.get(API_URL+'artist');
        const artists = await res.data;
        return artists;
    }catch(error){
        console.error(error);
    };
}