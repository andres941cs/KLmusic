
import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/";

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
      const response = await axios.get(API_URL+'karaoke/random');
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