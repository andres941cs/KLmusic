import { Card } from "@components/UI/Card";
import { Album } from "@models/album";
import { useLoaderData, useNavigate } from "react-router-dom";



const AlbumsPage = () => {
    const albums = useLoaderData() as Album[];
    console.log(albums);
    const API_URL = "http://127.0.0.1:8000";
    const navigate = useNavigate();

    const navigateTo = (id:number) => {
        navigate(`/album/${id}`)
    }
    return (
        <Card className="flex flex-col">
            <div className="flex flex-wrap">
            {albums.map((album:Album) => (
                // Max width of 222px
                <div onClick={()=>navigateTo(album.id)} key={album.id} className="flex flex-col max-w-[174px] p-3 hover:bg-zinc-600">
                    <img
                        src={API_URL+album.image}
                        alt={album.name}
                        className="w-[150px] h-[150px] rounded-sm object-cover m-auto"
                    />
                    <div className='flex flex-col'>
                        {album.name}
                        <span className='text-gray-500 text-sm'>{album.album}</span>
                        <span>{album.release_date} •{album.id_artist}</span>
                    </div>
                </div>
            ))}
            </div>
        </Card>
    );
}
export default AlbumsPage;