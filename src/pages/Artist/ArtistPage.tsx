import { useLoaderData, useNavigate } from "react-router-dom";
import TableSong from "../Song/components/TableSong";
import { useEffect, useState } from "react";
import { getSongsByArtist } from "../../services/Songs.services";
import { getAlbumsByArtist } from "@services/Album.services";
import { Album } from "@models/album";
import { getYears } from "@utils/index";
import { StackLayout } from "@components/Layouts/StackLayout";
import { Artist } from "@models/artist";

function ArtistPage() {
    const artist = useLoaderData() as Artist;
    const navigate = useNavigate();
    const [songs, setSongs] = useState([]);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getSongsByArtist(artist.id!).then(data => setSongs(data));
        getAlbumsByArtist(artist.id!).then(data => setAlbums(data))
    }, [])

    const navigateTo = (id:number) => {
        navigate(`/album/${id}`)
    }
    
    return ( 
        <StackLayout  className="h-full overflow-auto">
            {/* <CardHeader></CardHeader> */}
            <div className="flex h-2/5 lg:h-72 w-full gap-5 p-5 bg-[#f01050]">
                <img className="w-52 h-52 rounded-full" src={artist.image} alt="" />
                <div className="flex flex-col justify-center items-start">
                    <span className="m-1 text-foreground">Artist</span>
                    <h1 className="lg:text-8xl md:text-6xl sm:text-4xl font-bold text-foreground">{artist.name}</h1>
                </div>
            </div>
            <div className="h-full w-full bg-gradient-to-b from-red-900 to-slate-900 overflow-auto">
                {/* Canciones */}
                <h2 className="text-foreground">Songs</h2>
                <div className="h-auto">{songs.length > 0 ? <TableSong data={songs}></TableSong> : <span className="text-foreground">No hay canciones</span>}</div>

                <h2 className="text-foreground">Albums</h2>
                <div className="flex flex-wrap">
                {albums.map((album:Album) => (
                    <div onClick={()=>navigateTo(album.id!)} key={album.id} className="flex flex-col max-w-[174px] p-3 hover:bg-zinc-600">
                        <img src={album.image} alt={album.name}
                            className="w-[150px] h-[150px] rounded-sm object-cover m-auto"/>
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

export const CardHeader = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className="bg-slate-800 flex w-full p-2">
            <span onClick={()=>goBack()} className="material-symbols-outlined font-thin p-1 bg-slate-500 dark:text-white mx-2 rounded-full">arrow_left_alt</span>
        </div>
    )
}
export default ArtistPage;