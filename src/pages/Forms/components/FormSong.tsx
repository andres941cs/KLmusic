import { Card } from "@components/UI/Card";
import { useForm } from "react-hook-form";
import { AutoComplete } from "../FormPage";
import { Button, Input, Label } from "@components/UI";
import { searchSong } from "@services/Api.services";
import SelectForm from "./SelectForm";
import { searchAlbumsByName } from "@services/Album.services";
import { searchArtistByName } from "@services/Artist.services";

const FormSong = () => {
    interface FormData {
        [key: string]: string;
      }
    const onSubmit = (data:FormData) => {
        console.log(data)
    }
    const { register, handleSubmit} = useForm<FormData>()
    return ( 
        <Card className="!m-0">
        <h1 className="text-xl mb-3">INSERT SONG</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <AutoComplete name="Song" fecht={searchSong}/>
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
            {/* <Select/> */}
            <SelectForm onData={data=>console.log(data.value)} myFecht={searchArtistByName}/>

            <Label htmlFor="songs">Album:</Label>
            <SelectForm onData={data=>console.log(data.value)} myFecht={searchAlbumsByName}/>

            <Button className="bg-primary">Save</Button>
        </form>
        </Card>
     );
}
 
export default FormSong;
