import { Song } from "./songs";

export interface Lyric {
    id?: number;
    lyric: string;
    isInstrumental: number;
    song?: Song;
    id_song?: number;
    url: string;
    language: string;
    createdAt?: Date;
    updatedAt?: Date;
}