import { Button, Input, Label } from "@components/UI";
// import { Card  as MyCard} from "@components/UI/Card";

import { useForm } from "react-hook-form";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/UI/Tabs"
import { Card } from "@components/UI/Card";
import { useState } from "react";
import { searchAlbum, searchArtist } from "@services/Api.services";
import { searchArtistByName } from "@services/Artist.services";
import SelectForm from "./components/SelectForm";
import FormSong from "./components/FormSong";

const FormPage = () => {
    // VA SER UN  FORMULARIO PARA INSERTAR ARTISTAS, ALBUMES, CANCIONES
    // CON TABS PARA CAMBIAR DE UNO A OTRO -> SE TIENE QUE AUTORELLENAR LOS CAMPOS
    // CON LOS DATOS DE LA API DE SPOTIFY EN EL API SE COMPRUEBA SI ESTAN CORRECTOS Y LES DA EL OK
  return (
    <Tabs defaultValue="artists" className="md:w-[400px] m-auto">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="artists">Artists</TabsTrigger>
        <TabsTrigger value="albums">Albums</TabsTrigger>
        <TabsTrigger value="songs">Songs</TabsTrigger>
      </TabsList>
      <TabsContent value="artists">
        <FormArtist/>
      </TabsContent>
      <TabsContent value="albums">
        <FormAlbum/>
      </TabsContent>
      <TabsContent value="songs">
        <FormSong/>
      </TabsContent>
    </Tabs>
  )
}



// const FormPage = () => {
//     
//     return ( 
//         <Card>
//             <h1>INSERT ARTISTS</h1>
//             <FormArtist/>
//             {/* Buscar Data */}
//             {/* <div className="w-80">
//                 <input  type="text" placeholder="Search Artist"/>
//                 <span className="material-symbols-outlined">search</span></div> */}
//             {/* <AutoComplete name={'search'} fecht={()=>console.log('ho')}/> */}
//             {/* Formulario */}
//             {/* <Form title="Artist" inputs={registerFields} onSubmit={handleRegister} /> */}
//         </Card>
//      );
// }
 
export default FormPage;


interface IAutoComplete {
    name:string;
    fecht:(name:string)=>Promise<any>;
}
export const AutoComplete = ({name, fecht}:IAutoComplete) => {
    const [search, setSearch] = useState<string>("")
    const [suggestions, setSuggestions] = useState([])
    const getSuggestions = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        if(event.target.value.length > 2){
            fecht(event.target.value).then((res)=>setSuggestions(res))
        }
    }
    const selectSuggestion = (suggestion:any) => {
        // onData(suggestion)
        setSuggestions([])
    }
    return ( 
        <div className="flex items-center relative">
            <input className="w-full border rounded py-1 px-2 bg-muted" value={search} onChange={getSuggestions} type="text" placeholder="Search"/>
            {/* <span className="material-symbols-outlined">search</span> */}
            {suggestions.length > 0 && 
                <ul className="absolute h-40 top-full w-full bg-muted overflow-y-auto rounded-sm">
                    {suggestions.map((suggestion:any)=><li onClick={selectSuggestion} key={suggestion.id} className="hover:bg-[#bbbbbb] px-2 py-1">{suggestion.name}</li>)}
                </ul>
            }
        </div>
     );
}

export const FormArtist = () => {
    interface FormData {
        [key: string]: string;
      }
    const onSubmit = (data:FormData) => {
        console.log(data)
    }
    const { register, handleSubmit} = useForm<FormData>()
    return ( 
        <Card className="!m-0">
        <h1 className="text-xl mb-3">INSERT ARTISTS</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            {/* <input className="rounded px-3 py-1.5 text-foreground bg-muted w-full"  type="text" placeholder="Search Artist"/> */}
            <AutoComplete name="Artist" fecht={searchArtist}/>
            <p>If not found create here:</p>
            <Label htmlFor="name">Name:</Label>
            <Input id="name" nameInput="name" register={register}/>
            <Label htmlFor="image">URL Image:</Label>
            <Input nameInput="image" register={register}/>
            <Button className="bg-primary">Save</Button>
        </form>
        </Card>
     );
}

export const FormAlbum = () => {
    interface FormData {
        [key: string]: string;
      }
    const onSubmit = (data:FormData) => {
        console.log(data)
    }
    const { register, handleSubmit} = useForm<FormData>()
    return ( 
        <Card className="!m-0">
        <h1 className="text-xl mb-3">INSERT ALBUM</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            {/* <input className="rounded px-3 py-1.5 text-foreground bg-muted w-full"  type="text" placeholder="Search Artist"/> */}
            <AutoComplete name="Album" fecht={searchAlbum}/>
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
            <SelectForm onData={data=>console.log(data.value)} myFecht={searchArtistByName}/>

            {/* <Label htmlFor="songs">Songs:</Label>
            <SelectForm onData={data=>console.log(data.value)} myFecht={searchSongs}/> */}

            <Button className="bg-primary">Save</Button>
        </form>
        </Card>
     );
}