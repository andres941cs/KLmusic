import { StackLayout } from "../../../components/Layouts/StackLayout";
import { AlbumCard, ArtistCard } from "./Cards";

interface Song{
    id:number
    name:string
    artist:string
    image:string
}
interface myProps  {
    songs:Song[],
    className?: 'my-custom-class' // Optional HTML attribute
  }
function Result({songs}:myProps) {
    const listItems =  songs.map((song) => {return(
        <StackLayout key={song.id} orientation="row" className="w-full justify-between  hover:bg-accent p-2">
            <StackLayout orientation="row" className="gap-2 ">
                <img src={song.image}  className="h-12 w-12 rounded-full"></img>
                <p>{song.name}</p>
            </StackLayout>
            <span className="material-symbols-outlined">navigate_next</span>
        </StackLayout>
    )})
    return ( 
        <StackLayout orientation="column" className="w-full h-full gap-2">
            {/* PLANTILLA */}
            {/* <StackLayout orientation="row" className="w-full justify-between  hover:bg-accent p-2">
                <StackLayout orientation="row" className="gap-2 ">
                    <div className="h-12 w-12 bg-green-500 rounded-full"></div>
                    <p>Name Artist</p>
                </StackLayout>
                <span className="material-symbols-outlined">navigate_next</span>
            </StackLayout> */}
            {listItems}
            
        </StackLayout>
     );
}

export default Result;

interface Artist{
    id:number
    name:string
    artist:string
    image:string
}


interface myProps  {
    artists:Artist[],
    className?: 'my-custom-class' // Optional HTML attribute
  }
export function ResultArtist({artists}:myProps) {
    const listItems =  artists.map((artist) => {return(
        <ArtistCard data={artist}></ArtistCard>
    )})
    return ( 
        <StackLayout orientation="column" className="w-full h-full gap-2">
            {listItems}
        </StackLayout>
     );
}


interface Album{
    id:number
    name:string
    release_date:Date
    artist:string
    image:string
}
interface myProps  {
    albums:Album[],
    className?: 'my-custom-class' // Optional HTML attribute
  }
export function ResultAlbum({albums}:myProps) {
    return ( 
        <StackLayout orientation="column" className="w-full h-full gap-2">
            {albums.map((album) => 
                <AlbumCard  album={album}/>)
            }
        </StackLayout>
     );
}
