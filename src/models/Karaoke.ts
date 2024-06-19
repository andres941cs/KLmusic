import { Lyric } from "./Lyric";

export interface Karaoke {
    id?: number;
    settings: string;
    // isPublished: boolean;
    isPublished: number;
    publication_date: string;
    id_lyric: number;
    id_user: number;
    user?: string;
    lyric?: Lyric;
    createdAt?: Date;
    updatedAt?: Date;
}