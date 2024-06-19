import { StackLayout } from "@components/Layouts/StackLayout";
import { AlbumCard, ArtistCard, KaraokeCard, SongCard } from "./Cards";
import { Album } from "@models/Album";
import { Song } from "@models/Songs";
import { Artist } from "@models/Artist";
import { Karaoke } from "@models/Karaoke";

// RESULT KARAOKE
function Result({karaokes}:{karaokes:Karaoke[]}) {
    return ( 
        <StackLayout orientation="column" className="w-full h-full gap-2">
            {
                karaokes.map((karaoke) => (
                    <KaraokeCard key={karaoke.id} data={karaoke} />
                ))
            }
        </StackLayout>
     );
}

export default Result;

// RESULT SONG
export const ResultSong = ({songs}:{songs:Song[]}) => {
    return ( 
        <StackLayout orientation="column" className="w-full h-full gap-2">
            {songs.map((song) => ( <SongCard key={song.id} data={song} />))}
        </StackLayout>
     );
}

// RESULT ARTIST
export function ResultArtist({artists}:{artists:Artist[]}) {
    return ( 
        <StackLayout orientation="column" className="w-full h-full gap-2">
            {
                artists.map((artist) => {return(
                    <ArtistCard key={artist.id} data={artist}></ArtistCard>
                )})
            }
        </StackLayout>
     );
}

// RESULT ALBUM
export function ResultAlbum({albums}:{albums:Album[]}) {
    return ( 
        <div className="grid grid-cols-2 w-full h-full gap-2">
            {albums.map((album) => 
                <AlbumCard key={album.id} album={album}/>)
            }
        </div>
     );
}
