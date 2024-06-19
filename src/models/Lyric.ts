import { Song } from "./Songs";

export interface Lyric {
    id?: number;
    lyric: string;
    isInstrumental: number;
    song?: Song;
    id_song?: number;
    url: string;
    preview?: string;
    language: string;
    createdAt?: Date;
    updatedAt?: Date;
}