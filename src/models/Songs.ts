import { Album } from "./Album";
import { Artist } from "./Artist";

// MODELO SONGS
export interface Song {
  id?: number;
  name: string;
  genre: string;
  duration: number;
  image: string;
  id_album?: number;
  id_artist?: number;
  artist?: Artist;
  album?: Album;
  id_karaoke?: number;
}
