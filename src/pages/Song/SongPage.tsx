import { StackLayout } from "@components/Layouts/StackLayout";
import { Song } from "@models/Songs";
import { getLyricsBySongId } from "@services/LyricData";
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
        <StackLayout className="h-full overflow-hidden text-foreground">
            {/* CARD HEADER */}
            <div className="flex h-2/5 lg:h-72 w-full items-center gap-5 p-5 bg-[#f01050]">
                <img className="w-52 h-52 rounded-full" src={song.image} alt={song.name} />
                <div className="flex flex-col justify-center items-start">
                    <h1 className="lg:text-8xl md:text-6xl sm:text-4xl text-2xl font-bold text-foreground">{song.name}</h1>
                    <span>{song.artist?.name} • {song.album?.name}</span>
                    <span>Duration: {format(song.duration)}</span>
                    <span>Date: {song.album?.release_date} </span>
                </div>
            </div>
            {/* CARD BODY */}
            <div className="bg-muted w-full h-full overflow-auto">
                <h2 className="text-2xl font-bold text-foreground text-center">Lyrics</h2>
                <pre className="w-full text-foreground text-center font-[Blinker]">{lyrics}</pre>
            </div>
        </StackLayout>
    );
}
export default SongPage;