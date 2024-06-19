import { Card } from "@components/UI/Card";
import { useForm } from "react-hook-form";
import { AutoComplete } from "../FormPage";
import { Button, Input, Label } from "@components/UI";
import { searchSong } from "@services/ApiData";
import SelectForm from "./SelectForm";
import { searchAlbumsByName } from "@services/AlbumData";
import { searchArtistByName } from "@services/ArtistData";
import { useState } from "react";
import { Song } from "@models/Songs";
import { insertSong } from "@services/SongData";
import { Toaster, toast } from "sonner";

const FormSong = () => {
    const [album, setAlbum] = useState<number>()
    const [artist, setArtist] = useState<number>()
    interface FormData {
        [key: string]: string;
      }
      const onSubmit = (data:FormData) => {
        // Validations
        if(!data.name || !data.duration || !data.genre ||
           !data.image || !artist || !album) return toast.error("All fields are required");   
        if(isNaN(parseInt(data.duration))) return toast.error("Duration must be a number");
        if(!data.image.match(/\.(jpeg|jpg|gif|png)$/)) return toast.error("Image must be a URL");
  
        const song : Song = {
            name: data.name,
            duration: parseInt(data.duration),
            genre: data.genre,
            image: data.image,
            id_artist: artist,
            id_album: album,
        }
        insertSong(song).then(res =>{
            if(res.error) return toast.error(res.error);
            reset();
            toast.success(res);
        });
    }

    const autoSave = async (data: any) => {
        const artistas = await searchArtistByName(data.artists);
        const albums = await searchAlbumsByName(data.album);
        const song : Song = {
            id: data.id,
            name: data.name,
            duration: data.duration,
            genre: data.genres,
            image: data.image,
            id_artist: artistas[0].id ,
            id_album: albums[0]?.id|| null,
        }
        insertSong(song).then(res => toast.info(res));
    }
    const { register, handleSubmit, reset} = useForm<FormData>()
    return ( 
        <Card className="p-5">
            <h1 className="text-xl mb-3">INSERT SONG</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <AutoComplete onClick={autoSave} fecht={searchSong}/>
                <p>If not found create here:</p>
                <Label htmlFor="name">Name:</Label>
                <Input id="name" {...register('name')}/>

                <Label htmlFor="duration">Duration:</Label>
                <Input id="duration" {...register('duration')}/>

                <Label htmlFor="genre">Genre:</Label>
                <Input id="genre" {...register('genre')}/>

                <Label htmlFor="image">URL Image:</Label>
                <Input id="image" {...register('image')}/>
                
                <Label htmlFor="artist">Artist:</Label>
                <SelectForm onData={data=>setArtist(data.value)} myFecht={searchArtistByName}/>

                <Label htmlFor="songs">Album:</Label>
                <SelectForm onData={data=>setAlbum(data.value)} myFecht={searchAlbumsByName}/>

                <Button className="bg-primary">Save</Button>
            </form>
            <Toaster richColors/>
        </Card>
     );
}
 
export default FormSong;
