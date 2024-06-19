import { Card } from "@components/UI/Card";
import { AutoComplete } from "../FormPage";
import { Button, Input, Label } from "@components/UI";
import { searchArtist } from "@services/ApiData";
import { useForm } from "react-hook-form";
import { insertArtist } from "@services/ArtistData";
import { Artist } from "@models/Artist";
import { Toaster, toast } from "sonner";

export const FormArtist = () => {
    interface FormData {
        [key: string]: string;
    }
    const onSubmit = (data: FormData) => {
        if(!data.name || !data.country || !data.image ) return toast.error("All fields are required");

        const artist: Artist = {
            name: data.name,
            country: data.country,
            image: data.image
        };
        insertArtist(artist).then(res => {
            reset();
            toast.success(res);
        });
    };

    const autoSave = (data: Artist) => {
        insertArtist(data).then(res => toast.success(res));
    }

    const { register, handleSubmit, reset } = useForm<FormData>();
    return ( 
        <Card className="p-5">
            <h1 className="text-xl mb-3">INSERT ARTISTS</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <AutoComplete fecht={searchArtist} onClick={autoSave}/>
                <p>If not found create here:</p>
                <Label htmlFor="name">Name:</Label>
                <Input id="name" {...register('name')}/>

                <Label htmlFor="country">Country:</Label>
                <Input id="country" {...register('country')}/>

                <Label htmlFor="image">URL Image:</Label>
                <Input id="image" {...register('image')}/>
                <Button className="bg-primary">Save</Button>
            </form>
        <Toaster richColors/>
        </Card>
     );
}

export default FormArtist;