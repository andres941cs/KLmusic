import { Card } from "@components/UI/Card";
import { useLoaderData } from "react-router-dom";
import { Artist } from "src/models/artist";


const ArtistsPage = () => {
    const artists = useLoaderData() as Artist[];
    console.log(artists);
    const API_URL = "http://127.0.0.1:8000";
    return (
        <Card className="flex flex-col">
            <div className="flex flex-wrap justify-center">
            {artists.map((artist:Artist) => (
                // Max width of 222px
                <div key={artist.id} className="flex flex-col max-w-[174px] p-3 hover:bg-zinc-600">
                    <img
                        src={API_URL+artist.image}
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