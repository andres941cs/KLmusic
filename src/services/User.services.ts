import { API_URL } from "@utils/constants";
import axios from "axios";

export async function getProfile(token:string) {
    try {
      const headers = {
        'Authorization': 'Bearer ' + token
      }
      const response = await axios.get(API_URL+'profile', { headers });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }