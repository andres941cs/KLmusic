import axios from "axios";

const API_SERVICE_URL = 'http://localhost:3030/v1/';
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