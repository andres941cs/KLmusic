import { Card } from "@components/UI/Card";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Artist } from "src/models/artist";

const ArtistsPage = () => {
    const artists = useLoaderData() as Artist[];
    const navigate = useNavigate();

    const navigateTo = (id:number) => {
        navigate(`/artist/${id}`)
    }
    
    return (
        <Card className="flex flex-col">
            <div className="flex flex-wrap justify-center gap-5 overflow-auto">
            {artists.map((artist:Artist) => (
                // Max width of 222px
                <div onClick={()=>navigateTo(artist.id!)}  key={artist.id} className="flex flex-col max-w-[174px] p-3 hover:bg-zinc-600">
                    <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-[150px] h-[150px] rounded-full object-cover m-auto"
                    />
                    <div className='flex flex-col'>
                        {artist.name}
                        <span className='text-gray-400 text-sm'>Artist</span>
                    </div>
                </div>
            ))}
            </div>
        </Card>
    );
}
export default ArtistsPage;