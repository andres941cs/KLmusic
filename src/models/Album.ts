import { Artist } from "./Artist";

// Interface for Album
export interface Album {
    id?: number;
    name: string;
    id_artist?: number;
    artist?: Artist;
    image: string;
    release_date: string;
    genre: string;
    // songs: string;
}