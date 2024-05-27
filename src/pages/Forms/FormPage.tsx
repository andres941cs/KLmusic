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
  return (
    <Tabs defaultValue="artists" className="w-[70%] md:w-[400px] m-auto overflow-auto">
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

export default FormPage;


interface IAutoComplete {
    // name:string;
    fecht:(name:string)=>Promise<any>;
    onData?:(data:any)=>void;
    onClick?:(data:any)=>void;
}
export const AutoComplete = ({ fecht, onClick,onData}:IAutoComplete) => {
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
        <div className="flex items-center relative overflow-auto">
            <input className="w-full border rounded py-1 px-2 bg-muted" value={search} onChange={getSuggestions} type="text" placeholder="Search"/>
            {suggestions.length > 0 && 
                <ul className="absolute h-40 top-full w-full bg-muted overflow-y-auto rounded-sm">
                    {suggestions.map((suggestion:any)=><li onClick={()=>selectSuggestion(suggestion)} key={suggestion.id} className="hover:bg-[#bbbbbb] px-2 py-1">{suggestion.name}</li>)}
                </ul>
            }
        </div>
     );
}