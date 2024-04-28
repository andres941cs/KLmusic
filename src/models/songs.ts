import { Album } from "./album";
import { Artist } from "./artist";

// MODELO SONGS
export interface Song {
  id: number;
  name: string;
  genre: string;
  duration: number;
  image: string;
  artist: Artist; // Relación con el modelo de Artista
  album: Album; // Relación con el modelo de Álbum
}
