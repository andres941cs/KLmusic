import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@components/UI/Tabs"
import { useState } from "react";
import FormSong from "./components/FormSong";
import FormArtist from "./components/FormArtist";
import { FormAlbum } from "./components/FormAlbum";

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
    onData?:(data:any)=>void;
    onClick?:(data:any)=>void;
}
export const AutoComplete = ({name, fecht, onClick,onData}:IAutoComplete) => {
    const [search, setSearch] = useState<string>("")
    const [suggestions, setSuggestions] = useState([])
    const getSuggestions = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        if(event.target.value.length > 2){
            fecht(event.target.value).then((res)=>setSuggestions(res))
        }
    }
    const selectSuggestion = (suggestion:any) => {
        console.log(suggestion)
        if(onClick) onClick(suggestion)
        if(onData) onData(suggestion)
        setSuggestions([])
    }
    return ( 
        <div className="flex items-center relative">
            <input className="w-full border rounded py-1 px-2 bg-muted" value={search} onChange={getSuggestions} type="text" placeholder="Search"/>
            {/* <span className="material-symbols-outlined">search</span> */}
            {suggestions.length > 0 && 
                <ul className="absolute h-40 top-full w-full bg-muted overflow-y-auto rounded-sm">
                    {suggestions.map((suggestion:any)=><li onClick={()=>selectSuggestion(suggestion)} key={suggestion.id} className="hover:bg-[#bbbbbb] px-2 py-1">{suggestion.name}</li>)}
                </ul>
            }
        </div>
     );
}