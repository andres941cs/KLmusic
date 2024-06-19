import axios from 'axios';
import { API_URL } from '@utils/constants';
import { Karaoke } from '@models/Karaoke';

export const getKaraokes = async() => {
    try {
        const response = await axios.get(`${API_URL}karaokes`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const saveKaraoke = async (karaoke: Karaoke) => {
    try {
        const response = await axios.post(`${API_URL}karaoke`, karaoke);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateKaraoke = async (karaoke: Karaoke) => {
    try {
        const response = await axios.put(`${API_URL}karaoke/${karaoke.id}`, karaoke);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const  changeVisibility = async (id: number) => {
    const token = sessionStorage.getItem('token');
    const headers = {
      'Authorization': 'Bearer ' + token
    }
    try {
        const response = await axios.put(`${API_URL}user/karaoke/visibility/${id}`, {}, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteKaraoke = async (id: number) => {
    const token = sessionStorage.getItem('token');

    const headers = {
      'Authorization': 'Bearer ' + token
    }
    try {
        const response = await axios.delete(`${API_URL}user/karaoke/${id}`,{ headers });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
// EDITAR - PENDIENTE
export async function searchKaraoke(name:string){
    try {
      const response = await axios.post(API_URL+'karaoke/search/',{name: name});
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

export async function getKaraokesByGenre(genre:string){
    try {
      const response = await axios.get(API_URL+'genre/'+genre);
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