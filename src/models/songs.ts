import { Album } from "./album";
import { Artist } from "./artist";

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
}
