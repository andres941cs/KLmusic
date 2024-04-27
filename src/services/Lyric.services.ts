
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/";
export const getLyricsBySongId = async (songId: string) => {
    try {
        const response = await axios.get(`${API_URL}lyric/song/${songId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}