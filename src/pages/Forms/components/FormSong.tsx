import { Card } from "@components/UI/Card";
import { useForm } from "react-hook-form";
import { AutoComplete } from "../FormPage";
import { Button, Input, Label } from "@components/UI";
import { searchSong } from "@services/Api.services";
import SelectForm from "./SelectForm";
import { searchAlbumsByName } from "@services/Album.services";
import { searchArtistByName } from "@services/Artist.services";
import { useState } from "react";
import { Song } from "@models/songs";
import { insertSong } from "@services/Songs.services";

const FormSong = () => {
    const [album, setAlbum] = useState<number>()
    const [artist, setArtist] = useState<number>()
    interface FormData {
        [key: string]: string;
      }
      const onSubmit = (data:FormData) => {
        const song : Song = {
            name: data.name,
            duration: parseInt(data.duration),
            genre: data.genre,
            image: data.image,
            id_artist: artist,
            id_album: album,
        }
        insertSong(song).then(res => console.log(res));
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
        insertSong(song).then(res => console.log(res));
    }
    const { register, handleSubmit} = useForm<FormData>()
    return ( 
        <Card className="!m-0">
            <h1 className="text-xl mb-3">INSERT SONG</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <AutoComplete onClick={autoSave} fecht={searchSong}/>
                <p>If not found create here:</p>
                <Label htmlFor="name">Name:</Label>
                <Input id="name" nameInput="name" register={register}/>

                <Label htmlFor="duration">Duration:</Label>
                <Input id="duration" nameInput="duration" register={register}/>

                <Label htmlFor="genre">Genre:</Label>
                <Input id="genre" nameInput="genre" register={register}/>

                <Label htmlFor="image">URL Image:</Label>
                <Input nameInput="image" register={register}/>
                
                {/* DESPEGABLES */}
                <Label htmlFor="artist">Artist:</Label>
                <SelectForm onData={data=>setArtist(data.value)} myFecht={searchArtistByName}/>

                <Label htmlFor="songs">Album:</Label>
                <SelectForm onData={data=>setAlbum(data.value)} myFecht={searchAlbumsByName}/>

                <Button className="bg-primary">Save</Button>
            </form>
        </Card>
     );
}
 
export default FormSong;
