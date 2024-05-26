import { Card } from "@components/UI/Card";
import { Song } from "@models/songs";
import { getLyricsBySongId } from "@services/Lyric.services";
import { format } from "@utils/index";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const SongPage = () => {
    const song = useLoaderData() as Song;
    const [lyrics, setLyrics] = useState<string>('');
    useEffect(() => {
        getLyricsBySongId(song.id!).then(data => setLyrics(data[0].lyric));
    }, [])

    return (
        <Card className="!p-0 !m-0 flex flex-col ">
            {/* CARD HEADER */}
            <div className="flex h-2/5 lg:h-72 w-full gap-5 p-5 bg-[#f01050]">
                <img className="w-52 h-52 rounded-full" src={song.image} alt={song.name} />
                <div className="flex flex-col justify-center items-start">
                    <span className="m-1 text-foreground">Song</span>
                    <h1 className="lg:text-8xl md:text-6xl sm:text-4xl font-bold text-foreground">{song.name}</h1>
                    <span>{song.artist?.name} {song.album?.name}</span>
                    <span>Duration: {format(song.duration)} {song.album?.release_date} </span>
                </div>
            </div>
            {/* CARD BODY */}
            <div className="bg-muted h-full overflow-auto">
                <h2 className="text-2xl font-bold text-foreground text-center">Lyrics</h2>
                <p className="text-foreground w-2/3  sm:w-1/3 m-auto">{lyrics}</p>
            </div>
        </Card>
    );
}
export default SongPage;