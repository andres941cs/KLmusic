import { useLoaderData, useNavigate } from "react-router-dom";
import { StackLayout } from "../../components/Layouts/StackLayout";
import TableSong from "../Song/components/TableSong";
import { Artist } from "src/models/artist";
import { useEffect, useState } from "react";
import { getSongsByArtist } from "../../services/Songs.services";
import { API_URL } from "@utils/constantes";
import { getAlbumsByArtist } from "@services/Album.services";
import { Album } from "@models/album";
import { getYears } from "@utils/index";


function ArtistPage() {
    const artist = useLoaderData() as Artist;
    const navigate = useNavigate();
    const [songs, setSongs] = useState([]);
    const [albums, setAlbums] = useState([]);
    const navigateTo = (id:number) => {
        navigate(`/album/${id}`)
    }
    useEffect(() => {
        getSongsByArtist(artist.id)
        .then(data => {
            setSongs(data);
            console.log(data)
        });
        getAlbumsByArtist(artist.id).then(data => {
            setAlbums(data);
            console.log(data)
        })
    }, [])
    return ( 
        <StackLayout  className="max-h-full h-full bg-purple-700">
            <CardHeader></CardHeader>
            
            {/* Image */}
            
            {/* <div className={`relative h-2/5 lg:h-72 w-full`}>
                <img className="object-cover h-2/5 lg:h-72 w-full" src={API_URL+artist.image} alt="Artist Image" />
                <h1 className="absolute bottom-0">{artist.name}</h1>
            </div> */}
            <div className="flex h-2/5 lg:h-72 w-full gap-5 p-5">
                <img className="w-52 h-52 rounded-full" src={API_URL+artist.image} alt="" />
                <div className="flex flex-col justify-center items-start">
                        <span className="m-1 text-foreground">Artist</span>
                        <h1 className="lg:text-8xl md:text-6xl sm:text-4xl font-bold text-foreground">{artist.name}</h1>
                        
                    </div>
            </div>
            <div className="h-full w-full bg-black">
                    {/* Cnciones */}
                    <h2 className="text-foreground">Songs</h2>
                   {songs.length > 0 ? <TableSong data={songs}></TableSong> : <span className="text-foreground">No hay canciones</span>}
                    {/* <StackLayout>
                        <span>sus canciones</span>
                    </StackLayout> */}
                    {/* Albumnes */}
                    <h2 className="text-foreground">Albums</h2>
                    <div className="flex flex-wrap">
                    {albums.map((album:Album) => (
                        // Max width of 222px
                        <div onClick={()=>navigateTo(album.id)} key={album.id} className="flex flex-col max-w-[174px] p-3 hover:bg-zinc-600">
                            <img
                                src={API_URL+album.image}
                                alt={album.name}
                                className="w-[150px] h-[150px] rounded-sm object-cover m-auto"
                            />
                            <div className='flex flex-col text-foreground'>
                                <span className="truncate">{album.name}</span>
                                <span>{getYears(album.release_date)}</span>
                            </div>
                        </div>
                    ))}
            </div>
            </div>
            
        </StackLayout>
     );
}
// function ArtistPage() {
//     const {artist} = useLoaderData();
//     const API_URL =  'http://127.0.0.1:8000';
//     return ( 
//         <StackLayout className="h-full">
            
//             {/* Image */}
//             <img className="object-cover h-2/5 w-full" src={API_URL+artist.image} alt="Artist Image" />
            
//             {/* Cnciones */}
//             <div className="w-full">
//                 <h2 className="text-foreground">Songs</h2>
//                 <StackLayout>
//                     <span>sus canciones</span>
//                 </StackLayout>
//             </div>
//             {/* Albumnes */}
//         </StackLayout>
//      );
// }
export const CardHeader = () => {
    const navigate = useNavigate();

    const goBack = () => {
        console.log('go back')
        navigate(-1);
    }

    // const navigateTo = (id) => {
    //     navigate(`/artist/${id}`)
    // }
    return (
        <div className="bg-slate-800 flex w-full p-2">
            <span onClick={()=>goBack()} className="material-symbols-outlined font-thin p-1 bg-slate-500 dark:text-white mx-2 rounded-full">arrow_left_alt</span>
        </div>
    )
}
export default ArtistPage;