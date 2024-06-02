import { Card } from "@components/UI/Card";
import { useForm } from "react-hook-form";
import { Button, Input, Label } from "@components/UI";
import { getLyricsByName } from "@services/Api.services";
import SelectForm from "./SelectForm";

import { MouseEvent, useState } from "react";
import { searchSongs } from "@services/Songs.services";
import { Toaster, toast } from "sonner";
import { Lyric } from "@models/Lyric";
import { insertLyric } from "@services/Lyric.services";

const FormLyric = () => {
    const [song, setSong] = useState<number>();
    const [search, setSearch] = useState<string>("");
    const [instrumental, setInstrumental] = useState<boolean>(false);
    const [lyric, setLyric] = useState<string>("");

    interface FormData {
        [key: string]: string;
      }
      const onSubmit = (data:FormData) => {
        // Validations
        if(!lyric || !data.language || !data.url || !song) return toast.error("All fields are required");   
  
        const dataLyrics : Lyric = {
            lyric: lyric,
            language: data.language,
            isInstrumental: instrumental? 1 : 0,
            url: data.url,
            id_song: song,
        }
        console.log(dataLyrics)
        insertLyric(dataLyrics).then(res =>{
            if(res.error) return toast.error(res.error);
            reset();
            setLyric("");
            setInstrumental(false);
            toast.success(res);
        });
    }

    const handleClick = (e :MouseEvent ) => {
        e.preventDefault();
        const data = search.split(" - ");
        getLyricsByName(data[0], data[1]).then((res) => {
            if(res.error) return toast.error(res.error);
            setLyric(res.lyrics)
        })
    }

    const { register, handleSubmit, reset} = useForm<FormData>()
    return ( 
        <Card className="!m-0">
            <h1 className="text-xl mb-3">INSERT LYRICS</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">

                <div className="flex gap-3">
                    <input onChange={(e)=>setSearch(e.target.value)}  value={search} className="w-full border rounded py-1 px-2 bg-muted" type="text" placeholder="Name Song - Name Artist"/>
                    <Button className="!w-24" onClick={handleClick}>Search</Button>
                </div>
                <p>If not found create here:</p>

                <Label htmlFor="songs">Songs:</Label>
                <SelectForm onData={data=>setSong(data.value)} myFecht={searchSongs}/>

                <Label htmlFor="lyric">Lyrics:</Label>
                <input value={lyric} onChange={(e)=>setLyric(e.target.value)} className="w-full border rounded py-1 px-2 bg-white text-gray-900" type="text" />

                <Label htmlFor="url">URL:</Label>
                <Input id="url" nameInput="url" register={register}/>

                <Label htmlFor="language">Language:</Label>
                <Input id="language" nameInput="language" register={register}/>

                <div className="flex gap-3">
                    <Label htmlFor="name">Intrumental:</Label>
                    <input onChange={(e)=>setInstrumental(e.target.checked)} type="checkbox" />
                    
                </div>

                <Button className="bg-primary">Save</Button>
            </form>
            <Toaster richColors/>
        </Card>
     );
}
 
export default FormLyric;
