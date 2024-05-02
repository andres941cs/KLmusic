import axios from 'axios';
import { API_URL } from '@utils/constantes';

export const getLyricsBySongId = async (songId: number) => {
    try {
        const response = await axios.get(`${API_URL}lyric/song/${songId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}