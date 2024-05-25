import axios from "axios";
import { API_SERVICE_URL } from "@utils/constants";

/* RUTAS DE LA API - ENDPOINTS */
export const romanized = async (lyric:string) => {
    try {
        const response = await axios.post(API_SERVICE_URL + 'song/romanized', { "lyric": lyric });
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const searchArtist = async (artist:string) => {
    try {
        const response = await axios.get(API_SERVICE_URL + 'artist/search/'+ artist);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const searchAlbum = async (album:string) => {
    try {
        const response = await axios.get(API_SERVICE_URL + 'album/search/' + album);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const searchSong = async (song:string) => {
    try {
        const response = await axios.get(API_SERVICE_URL + 'song/search/' + song);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}