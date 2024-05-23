import { StackLayout } from '@components/Layouts/StackLayout';
import { Album } from '@models/album';
import TableSong from '@pages/Song/components/TableSong';
import { getSongsByAlbum } from '@services/Songs.services';
import { getRamdomColor } from '@utils/index';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

// interface AlbumPageProps {

// }

// const AlbumPage: React.FC<AlbumPageProps> = (props) => {
const AlbumPage = () => {
    const album = useLoaderData() as Album;
    // const navigate = useNavigate();
    // const navigateTo = (route:string, id:number) => {
    //     navigate(`/route/${id}`)
    // }
    const [songs, setSongs] = useState([]);
    const bg = getRamdomColor();
    useEffect(() => {
        getSongsByAlbum(album.id!)
        .then(data => {
            setSongs(data);
            console.log(data)
        })
    }, [])
    return (
        <StackLayout  className={`max-h-full h-full ${bg}`}>
            {/* <CardHeader></CardHeader> */}
            
            {/* Image */}
            
            {/* <div className={`relative h-2/5 lg:h-72 w-full`}>
                <img className="object-cover h-2/5 lg:h-72 w-full" src={API_URL+artist.image} alt="Artist Image" />
                <h1 className="absolute bottom-0">{artist.name}</h1>
            </div> */}
            <div className="flex h-2/5 lg:h-72 w-full gap-5 p-5">
                <img className="w-52 h-52 rounded" src={album.image} alt={album.name} />
                <div className="flex flex-col justify-center items-start">
                        <span className="m-1 text-foreground">Album</span>
                        <h1 className="lg:text-8xl md:text-6xl sm:text-4xl font-bold text-foreground">{album.name}</h1>
                        
                    </div>
            </div>
            <div className="h-full w-full bg-transparent">
                    {/* Cnciones */}
                    <h2 className="text-foreground">Songs</h2>
                    {songs.length > 0 ? <TableSong data={songs}></TableSong> : <span className="text-foreground">No hay canciones</span>}
                    <StackLayout>
                        <span>sus canciones</span>
                    </StackLayout>
    
                    {/* Albumnes */}
                    
            </div>
            
        </StackLayout>
        );

};

export default AlbumPage;