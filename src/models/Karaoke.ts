import { Lyric } from "./Lyric";

export interface Karaoke {
    id: number;
    // title: string;
    isPublished: boolean;
    user: string;
    lyric: Lyric;
    createdAt: Date;
    updatedAt: Date;
}