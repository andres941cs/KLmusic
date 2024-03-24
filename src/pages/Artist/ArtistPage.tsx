import { useLoaderData } from "react-router-dom";
import { StackLayout } from "../../components/Layouts/StackLayout";

function ArtistPage() {
    const {artist} = useLoaderData();
    const API_URL =  'http://127.0.0.1:8000';
    return ( 
        <StackLayout className="h-full">
            {/* Header */}
            <div className="bg-slate-800 flex w-full p-2">
            <span className="material-symbols-outlined font-thin p-1 bg-slate-500 dark:text-white mx-2 rounded-full">arrow_left_alt</span>
            </div>
            {/* Image */}
            <img className="object-cover h-2/5 w-full" src={API_URL+artist.image} alt="Artist Image" />
            
            {/* Cnciones */}
            <div className="w-full">
                <h2 className="text-foreground">Songs</h2>
                <StackLayout>
                    <span>sus canciones</span>
                </StackLayout>
            </div>
            {/* Albumnes */}
        </StackLayout>
     );
}

export default ArtistPage;

export const loaderArtist = async ({params}) => {
    
    const URL =`http://127.0.0.1:8000/api/artist/${params.id}`;
    
    // const PARAMS = {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json',
    //     },
    //     body:JSON.stringify(data)
    // }
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
    console.log(res)
    const artist = await res;
    return {artist}
}