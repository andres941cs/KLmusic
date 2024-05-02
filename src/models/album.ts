import { Artist } from "./artist";

// Interface for Album
export interface Album {
    id: number;
    name: string;
    artist: Artist;
    image: string;
    release_date: string;
    genre: string;
    songs: string;
}