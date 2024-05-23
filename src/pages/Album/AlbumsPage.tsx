import { Card } from "@components/UI/Card";
import { Album } from "@models/album";
import { getYears } from "@utils/index";
import { useLoaderData, useNavigate } from "react-router-dom";

const AlbumsPage = () => {
    const albums = useLoaderData() as Album[];
    const navigate = useNavigate();

    const navigateTo = (id:number) => {
        navigate(`/album/${id}`)
    }

    return (
        <Card className="flex flex-col">
            <div className="flex flex-wrap">
            {albums.map((album:Album) => (
                <div onClick={()=>navigateTo(album.id!)} key={album.id} className="flex flex-col max-w-[174px] p-3 hover:bg-zinc-600">
                    <img
                        src={album.image}
                        alt={album.name}
                        className="w-[150px] h-[150px] rounded-sm object-cover m-auto"
                    />
                    <div className='flex flex-col'>
                        <span className="truncate">{album.name}</span>
                        <span className='text-muted-foreground text-sm'>{getYears(album.release_date)} • {album.artist?.name}</span>
                    </div>
                </div>
            ))}
            </div>
        </Card>
    );
}
export default AlbumsPage;