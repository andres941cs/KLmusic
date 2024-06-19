import { StackLayout } from "@components/Layouts/StackLayout";
import { Album } from "@models/Album";
import { getYears } from "@utils/index";
import { useLoaderData, useNavigate } from "react-router-dom";

const AlbumsPage = () => {
    const albums = useLoaderData() as Album[];
    const navigate = useNavigate();

    const navigateTo = (id:number) => {
        navigate(`/album/${id}`)
    }

    return (
        <StackLayout className="h-full p-5 overflow-auto text-foreground">
            <div className="flex flex-wrap justify-center gap-5">
            {albums.map((album:Album) => (
                <div onClick={()=>navigateTo(album.id!)} key={album.id} className="flex flex-col max-w-[174px] p-3 hover:bg-muted">
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
        </StackLayout>
    );
}
export default AlbumsPage;