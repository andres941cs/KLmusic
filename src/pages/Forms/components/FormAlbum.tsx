import { Card } from "@components/UI/Card";
import { useForm } from "react-hook-form";
import { AutoComplete } from "../FormPage";
import { Button, Input, Label } from "@components/UI";
import SelectForm from "./SelectForm";
import { searchAlbum } from "@services/Api.services";
import { searchArtistByName } from "@services/Artist.services";
import { Album } from "@models/album";
import { insertAlbum } from "@services/Album.services";
import { useState } from "react";

export const FormAlbum = () => {
    const [artist, setArtist] = useState();
    interface FormData {
        [key: string]: string;
      }
    const onSubmit = (data:FormData) => {
        console.log(data);
        // FORMATEAR DATA
        const Album : Album = {
            name: data.name,
            release_date: data.release_date,
            genre: data.genre,
            image: data.image,
            id_artist: artist
        }
        console.log(Album);
        insertAlbum(Album).then(res => console.log(res));
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
            insertAlbum(Album).then(res => console.log(res));
        });
    }
    const { register, handleSubmit} = useForm<FormData>()
    return ( 
        <Card className="!m-0">
        <h1 className="text-xl mb-3">INSERT ALBUM</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <AutoComplete onClick={autoSave} fecht={searchAlbum}/>
            <p>If not found create here:</p>
            <Label htmlFor="name">Name:</Label>
            <Input id="name" nameInput="name" register={register}/>

            <Label htmlFor="release_date">Release Date:</Label>
            <Input id="release_date" nameInput="release_date" register={register}/>

            <Label htmlFor="genre">Genre:</Label>
            <Input id="genre" nameInput="genre" register={register}/>

            <Label htmlFor="image">URL Image:</Label>
            <Input nameInput="image" register={register}/>
            
            {/* DESPEGABLES */}
            <Label htmlFor="artist">Artist:</Label>
            {/* <Select/> */}
            <SelectForm onData={data=>setArtist(data.value)} myFecht={searchArtistByName}/>

            {/* <Label htmlFor="songs">Songs:</Label>
            <SelectForm onData={data=>console.log(data.value)} myFecht={searchSongs}/> */}

            <Button className="bg-primary">Save</Button>
        </form>
        </Card>
     );
}