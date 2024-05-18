import axios from "axios";

const API_SERVICE_URL = 'http://localhost:3000/v1/';
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
        const response = await axios.get(API_SERVICE_URL + 'album/search' + album);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const searchSong = async (song:string) => {
    try {
        const response = await axios.get(API_SERVICE_URL + 'song/search' + song);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}