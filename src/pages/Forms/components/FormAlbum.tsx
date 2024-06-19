import { Card } from "@components/UI/Card";
import { useForm } from "react-hook-form";
import { AutoComplete } from "../FormPage";
import { Button, Input, Label } from "@components/UI";
import SelectForm from "./SelectForm";
import { searchAlbum } from "@services/ApiData";
import { searchArtistByName } from "@services/ArtistData";
import { Album } from "@models/Album";
import { insertAlbum } from "@services/AlbumData";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export const FormAlbum = () => {
    const [artist, setArtist] = useState();
    interface FormData {
        [key: string]: string;
      }

    const onSubmit = (data:FormData) => {
        // Validations
        if(!data.name || !data.release_date || !data.genre || !data.image || !artist) return toast.error("All fields are required");
        if(!data.release_date.match(/\d{4}-\d{2}-\d{2}/)) return toast.error("Release Date must be in format YYYY-MM-DD");
        if(!data.image.match(/\.(jpeg|jpg|gif|png)$/)) return toast.error("Image must be a URL");

        const Album : Album = {
            name: data.name,
            release_date: data.release_date,
            genre: data.genre,
            image: data.image,
            id_artist: artist
        }

        insertAlbum(Album).then(res => {
            reset();
            toast.success(res)
        })
    }
    
    const autoSave = (data: any) => {
        searchArtistByName(data.artists).then(res => {
            const Album : Album = {
            id: data.id,
            name: data.name,
            release_date: data.release_date,
            genre: data.genres,
            image: data.image,
            id_artist: res[0].id
        }
            insertAlbum(Album).then(res => toast.success(res));
        });
    }
    const { register, handleSubmit, reset} = useForm<FormData>()
    return ( 
        <Card className="p-5">
        <h1 className="text-xl mb-3">INSERT ALBUM</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <AutoComplete onClick={autoSave} fecht={searchAlbum}/>
            <p>If not found create here:</p>
            <Label htmlFor="name">Name:</Label>
            <Input id="name" {...register('name')}/>

            <Label htmlFor="release_date">Release Date:</Label>
            <Input id="release_date" {...register('release_date')}/>

            <Label htmlFor="genre">Genre:</Label>
            <Input id="genre" {...register('genre')}/>

            <Label htmlFor="image">URL Image:</Label>
            <Input id="image" {...register('image')}/>
            
            <Label>Artist:</Label>
            <SelectForm onData={data=>setArtist(data.value)} myFecht={searchArtistByName}/>
            
            <Button className="bg-primary">Save</Button>
        </form>
        <Toaster richColors/>
        </Card>
     );
}