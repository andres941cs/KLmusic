import { Song } from "./songs";

export interface Lyric {
    id: number;
    lyric: string;
    isInstrumental: boolean;
    song: Song;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}