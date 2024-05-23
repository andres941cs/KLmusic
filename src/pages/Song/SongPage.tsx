import { Card } from "@components/UI/Card";
import { useLoaderData } from "react-router-dom";
import { Song } from "src/models/songs";

const SongPage = () => {
    const song = useLoaderData() as Song;
    console.log(song);
    return (
        <Card className="flex flex-col">
            {/* CARD HEADER */}
            <div className="bg-purple-300 h-72 flex items-end gap-3 p-3">
            <img src={song.image} alt={song.name} className="w-32 h-32 rounded"/>
                <div className="flex flex-col justify-center items-start">
                    <span>Song</span>
                    <h1 className="text-4xl font-bold text-foreground">{song.name}</h1>
                    <div className="flex flex-col">
                        <span>{song.artist?.name} {song.album?.name}</span>
                        <span>{song.album?.release_date} {song.duration}</span>
                    </div>
                </div>
            </div>
            {/* CARD BODY */}
            <div className="bg-black h-full">
                <h2 className="text-2xl font-bold text-foreground">Lyrics</h2>
                <p className="text-foreground">{song.id}</p>
            </div>
        </Card>
    );
}
export default SongPage;