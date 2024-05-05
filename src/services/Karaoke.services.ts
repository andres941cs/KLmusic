import axios from 'axios';
import { API_URL } from '@utils/constantes';
import { Karaoke } from '@models/Karaoke';

export const saveKaraoke = async (karaoke: Karaoke) => {
    try {
        const response = await axios.post(`${API_URL}karaoke`, karaoke);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function searchKaraoke(name:string){
    try {
      const response = await axios.get(API_URL+'karaoke/search/'+name);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  
}
export async function randomKaraoke(){
    try {
      const response = await axios.get(API_URL+'random/karaoke');
      return response.data;
    } catch (error) {
      console.error(error);
    }
}
export async function getKaraokesByUser(id:number){
    try {
      const response = await axios.get(API_URL+'karaoke/user/'+id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

export const loaderKaraoke = async ({params}:any) => {
    try{
      const res = await axios.get(`${API_URL}karaoke/${params.id}`);
      const karaoke = await res.data;
      return karaoke
    }catch(error){
      console.error(error);
    };
}