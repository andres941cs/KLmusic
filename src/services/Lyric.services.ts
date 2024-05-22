import axios from 'axios';
import { API_URL } from '@utils/constantes';
import { Lyric } from '@models/Lyric';

export const getLyricsBySongId = async (songId: number) => {
    try {
        const response = await axios.get(`${API_URL}lyric/song/${songId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export const insertLyric = async (lyric: Lyric) => {
    try {
        console.log(lyric);
        const response = await axios.post(`${API_URL}lyric`, lyric);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
