import { API_URL } from "@utils/constantes";
import axios from "axios";
// import { Artists } from "src/models/artist";
/* RUTAS DE LA API - ENDPOINTS */
// GET /abums
// export async function getSongs() {
//     try {
//       const response = await axios.get(API_URL+'songs');
//       return response.data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

/* RUTAS DE LA API - LOADERS */
export const loaderArtist = async ({params}:any) => {
    
    const URL =`http://127.0.0.1:8000/api/artist/${params.id}`;
    const res = await fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    // .then(data => {
    //     console.log(data);
    //     setData(data);
    // })
    .catch(error => {
        console.error("Error during fetch operation:", error);
    });
    return res;
}

export const loaderArtists = async () => {
    try{
        const res = await axios.get(API_URL+'artist');
        const artists = await res.data;
        console.log(artists);
        return artists;
    }catch(error){
        console.error(error);
    };
}