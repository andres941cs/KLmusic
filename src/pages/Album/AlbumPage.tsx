import { StackLayout } from '@components/Layouts/StackLayout';
import { Album } from '@models/album';
import TableSong from '@pages/Song/components/TableSong';
import { getSongsByAlbum } from '@services/Songs.services';
import { getRamdomColor } from '@utils/index';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AlbumPage = () => {
    const album = useLoaderData() as Album;
    const [songs, setSongs] = useState([]);
    const [bg, setBg] = useState('');

    useEffect(() => {
        getSongsByAlbum(album.id!).then(data => setSongs(data));
        setBg(getRamdomColor());
    }, [])
    
    return (
        <StackLayout  className={`overflow-auto h-full ${bg}`}>
            <div className="flex h-2/5 lg:h-72 w-full gap-5 p-5">
                <img className="w-52 h-52 rounded" src={album.image} alt={album.name} />
                <div className="flex flex-col justify-center items-start">
                    <span className="m-1 text-foreground">Album</span>
                    <h1 className="lg:text-8xl md:text-6xl sm:text-4xl font-bold text-foreground">{album.name}</h1>
                 </div>
            </div>
            <div className="h-full w-full flex flex-col bg-transparent">
                {/* Songs */}
                <h2 className="text-foreground text-xl p-2">Songs</h2>
                {songs.length > 0 ? <TableSong data={songs}></TableSong> : <span className="text-foreground">No Data</span>}
            </div>
        </StackLayout>
        );
};

export default AlbumPage;