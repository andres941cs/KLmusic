import ChevronRightIcon from "@assets/Icons/ChevronRightIcon"
import { StackLayout } from "@components/Layouts/StackLayout"
import { Album } from "@models/Album"
import { Artist } from "@models/Artist"
import { Karaoke } from "@models/Karaoke"
import { Song } from "@models/Songs"
import { getYears } from "@utils/index"
import { useNavigate } from "react-router-dom"

export const KaraokeCard = ({data}: {data: Karaoke}) => {
    const navigate = useNavigate();
    return ( 
    <StackLayout key={data.id} onClick={()=>navigate(`/player/${data.id}`)} orientation="row" className="w-full justify-between hover:bg-muted p-2">
        <StackLayout orientation="row" className="gap-2 ">
            <img src={data.lyric?.song?.image}  className="h-12 w-12 rounded"></img>
            <div className="mx-2">
            <p>{data.lyric?.song?.name}</p>
            <p className="text-sm text-muted-foreground">{data.lyric?.song?.artist?.name}</p>
            </div>
        </StackLayout>
        <ChevronRightIcon className="fill-foreground"/>
    </StackLayout> );
}

export const SongCard = ({data}: {data: Song}) => {
    const navigate = useNavigate();
    return ( 
    <StackLayout key={data.id} onClick={()=>navigate(`/song/${data.id}`)} orientation="row" className="w-full justify-between hover:bg-muted p-2">
        <StackLayout orientation="row" className="gap-2 ">
            <img src={data.image}  className="h-12 w-12 rounded"></img>
            <div className="mx-2">
            <p>{data.artist?.name}</p>
            <p className="text-sm text-muted-foreground">{data.name}</p>
            </div>
        </StackLayout>
        <ChevronRightIcon className="fill-foreground"/>
    </StackLayout> );
}

export function ArtistCard({data}:{data:Artist}) {
    const navigate = useNavigate();
    return(
        <StackLayout key={data.id} onClick={()=>navigate(`/artist/${data.id}`)} orientation="row" className="w-full justify-between  hover:bg-muted p-2">
            <StackLayout orientation="row" className="gap-2 ">
                <img src={data.image}  className="h-12 w-12 rounded-full"></img>
                <p>{data.name}</p>
            </StackLayout>
            <ChevronRightIcon className="fill-foreground"/>
        </StackLayout>
    )
}

export function AlbumCard({album}:{album:Album}) {
    const navigate = useNavigate();
    return(
        <StackLayout onClick={()=>navigate(`/album/${album.id}`)} className="w-full hover:bg-muted gap-2 py-2">
            <img src={album.image}  className="h-36 w-36 rounded"></img>
            <StackLayout alignItems="start" className="gap-1 w-full px-4">
                <p className="font-bold">{album.name}</p>
                <p className="text-muted-foreground">{album.artist?.name} • {getYears(album.release_date)}</p>
                
            </StackLayout>
            
        </StackLayout>
    )
}