import { StackLayout } from "../../../components/Layouts/StackLayout"

// CARDS
interface Song{
    id:number
    name:string
    artist:string
    image:string
}

function SongCard(songs:Song[]) {
    songs.map((song) => {return(
        <StackLayout key={song.id} orientation="row" className="w-full justify-between  hover:bg-accent p-2">
            <StackLayout orientation="row" className="gap-2 ">
                <img src={song.image}  className="h-12 w-12 rounded-full"></img>
                <StackLayout>
                <p>{song.name}</p>
                <p>{song.id_artist}</p>
                </StackLayout>
            </StackLayout>
            <span className="material-symbols-outlined">navigate_next</span>
        </StackLayout>
    )})
}

interface Artist{
    id:number
    name:string
    artist:string
    image:string
}

function ArtistCard(artists:Artist[]) {
    artists.map((artist) => {return(
        <StackLayout key={artist.id} orientation="row" className="w-full justify-between  hover:bg-accent p-2">
            <StackLayout orientation="row" className="gap-2 ">
                <img src={artist.image}  className="h-12 w-12 rounded-full"></img>
                <p>{artist.name}</p>
            </StackLayout>
            <span className="material-symbols-outlined">navigate_next</span>
        </StackLayout>
    )})
}

interface Album{
    id:number
    name:string
    artist:string
    image:string
}

function AlbumCard(albums:Album[]) {
    albums.map((album) => {return(
        <StackLayout key={album.id} orientation="row" className="w-full justify-between  hover:bg-accent p-2">
            <StackLayout orientation="row" className="gap-2 ">
                <img src={album.image}  className="h-12 w-12 rounded-full"></img>
                <p className="font-bold">{album.name}</p>
                <p>{album.artist}</p>
                <p>{album.release_date}</p>
            </StackLayout>
            <span className="material-symbols-outlined">navigate_next</span>
        </StackLayout>
    )})
}