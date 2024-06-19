import { API_URL } from "@utils/constants";
import axios from "axios";

export async function getProfile(token:string) {
  const headers = {
    'Authorization': 'Bearer ' + token
  }
  const response = await axios.get(API_URL+'profile', { headers });
  return response.data;
}

export async function updateProfile(token:string, data:any, id:number) {
  const headers = {
    'Authorization': 'Bearer ' + token
  }
  const response = await axios.put(`${API_URL}profile/${id}`, data, { headers });
  return response.data;
}