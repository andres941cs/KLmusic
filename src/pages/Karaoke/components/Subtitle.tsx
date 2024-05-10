import { StackLayout } from "@components/Layouts/StackLayout";
import { Textarea } from "./Textarea";
import InputTime from "./InputTime";
import { Button } from "@components/UI";
import { forwardRef, useRef, useState } from "react";
import { saveKaraoke } from "../../../services/Karaoke.services";
import { Karaoke } from "@models/Karaoke";
import SearchSong from "./Search";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/UI/Select";

interface SubtitleProps {
    onData: (data: string) => void;
  }
function Subtitle({ onData }: SubtitleProps) {
    const elementsRefs = useRef([])
    /*______________ Formulario ______________*/
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("BOTON SAVE...")
        //CREAR UN OBJETO CON LOS DATOS DEL FORMULARIO
        console.log(elements)
        let settings:any = []
        const mySubtitles = elementsRefs.current;
        mySubtitles.forEach((element:any,index) => {
            console.log(index);
            // const InputLyric = element.querySelector('#lyric') as HTMLInputElement;
            const lyric = element.querySelector('#lyric')?.value;
            const startTime = element.querySelector('#startTime')?.value;
            const endTime = element.querySelector('#endTime')?.value;
            const mySubtitle:FormSettings = {
                number:index,
                startTime:startTime,
                endTime:endTime,
                text:lyric
            }
            settings.push(mySubtitle)
        });


        // REFACTORIZAR LLEVARLO A UTILS
        let cadena = "";
        settings.forEach((subtitulo:any) => {
            cadena += `${subtitulo.number}\n${subtitulo.startTime} --> ${subtitulo.endTime}\n${subtitulo.text}\n\n`;
          });
        console.log(cadena);
        const Karaoke:Karaoke ={
            'settings': cadena,
            'publication_date': '2024-04-27',
            'isPublished': 1,
            'id_lyric': 1,
            'id_user': 1,
        }
        console.log(Karaoke)
        // GUARDAR LOS DATOS EN LA BASE DE DATOS
        saveKaraoke(Karaoke).then((data) => {
            console.log(data)
        })
    };

    interface FormSettings {
        number:number;
        startTime: string;
        endTime: string;
        text: string;
    }
    // const [duplicados, setDuplicados] = useState(0);
    const [elements, setElements] = useState<JSX.Element[]>([]);
    const duplicarComponente = () => {
        // setDuplicados(duplicados + 1);
        console.log(elements.length)
        const newElement = <Setting key={elements.length} ref={assignRef(elements.length)}/>;
        setElements(prevElements => [...prevElements, newElement]);
    };
    // Función para asignar una ref a un elemento generado
    const assignRef = (index:number) => (element:never) => {
        elementsRefs.current[index] = element;
    };
    /*______________ LETRAS ______________*/
    // Función para obtener los resultados de las canciones
    // const [value, setValue] = useState('');
    // const [sugesstions, setSuggestions] = useState([]);
    const [lyrics, setLyrics] = useState([]);
    
    // const getSuggestions  = (event:ChangeEvent<HTMLInputElement>) => {
    //     setValue(event.target.value);
    //     setSuggestions([]);
    //     if(event.target.value.length >= 3) {
    //         searchSongs(event.target.value).then((data) => {
    //             const suggestions = data.map((song:Song) => {
    //                 return <li key={song.id} onClick={()=>showLyrics(song.id)}>{song.name}</li>
    //             })
    //             setSuggestions(suggestions);
    //             console.log(suggestions)
    //         })
    //     }
    // }
    // const showLyrics = (id:number) => {
    //     getLyricsBySongId(id).then((data) => {
    //         console.log(data)
            
    //         const arrayLyrics = data.map((lyric:Lyric) => {
    //             return <option className="focus:bg-white" key={lyric.id} value={lyric.lyric}>{lyric.id}</option>
    //         })
    //         setLyrics(arrayLyrics)
    //     })
    // }
    // const showLyrics = (id:number) => {
    //     getLyricsBySongId(id).then((data) => {
    //         const arrayLyrics = data.map((lyric:Lyric) => {
    //             return <SelectItem key={lyric.id} value={lyric.lyric}>{lyric.language}</SelectItem>
    //         })
    //         setLyrics(arrayLyrics)
    //     })
    // }

    const handleLyrics = (data: [])  => {
        setLyrics(data);
      };
    const [open , setOpen ] = useState(false);

    return ( 
        // <form {...props} onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-8">
        <form onSubmit={handleSubmit} className="h-full w-full border-r pr-5">
        <StackLayout className="h-full w-full overflow-x-auto">
            {/* ACTIONS */}
            <StackLayout orientation="row" gap={5}>
                Options
                {/* <button type="button" onClick={duplicarComponente}><span className="material-symbols-outlined">add_circle</span></button> */}
                <span onClick={duplicarComponente} className="material-symbols-outlined cursor-pointer">add_circle</span>
                {/* <div>
                    <input value={value} onChange={getSuggestions} className="text-black" placeholder="Song" />
                    <ul>{sugesstions}</ul>
                </div> */}
                <span onClick={()=>setOpen(true)} className="material-symbols-outlined cursor-pointer">search</span>
                {/* <select className="bg-background border rounded p-1.5" onChange={(event) => onData(event.target.value)}>
                            <option className="checked:bg-white hover:bg-slate-600 " value="1">Song 1</option>
                            {lyrics}
                 </select> */}
                <Select onValueChange={(e)=>onData(e)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Lyrics" />
                    </SelectTrigger>
                    <SelectContent>
                        {/* <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem> */}
                        {lyrics.length>0?lyrics:<SelectItem value="Select Lyrics">Select Song</SelectItem>}
                    </SelectContent>
                </Select>


                <Button type="submit">Save</Button>
                {/* Pruebas */}
                <SearchSong onData={handleLyrics} isOpen={open} setIsOpen={setOpen} />
            </StackLayout>
            {/* LYRICS */}
            {/* <StackLayout className="w-[900px] h-[110px] border"> */}
            <StackLayout className="w-full h-[110px]">
                {/* <div className="w-full h-24 border">

                </div> */}
                <StackLayout gap={3} orientation="row" className="w-full py-1 px-2">
                    <div className="w-full h-[100px] border"> 
                        <Textarea id="lyric" className="h-full resize-none"></Textarea>
                    </div>
                    <span className="material-symbols-outlined text-foreground">delete</span>
                    <StackLayout justifyContent="between" className="h-full">
                        <div className="w-40 h-10 border"><InputTime id="startTime"/></div>
                        <div className="w-40 h-10 border"><InputTime id="endTime"/></div>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
            
            {elements}
        </StackLayout>
        </form>
     );
}

export default Subtitle;


// function Setting() {
//     return ( 
//         <StackLayout gap={3} orientation="row" className="w-full px-5 py-1">
//             <div className="w-full h-[100px] border"> 
//                 <Textarea id="lyric" className="h-full resize-none"></Textarea>
//             </div>
//             <span className="material-symbols-outlined text-foreground">delete</span>
//             <StackLayout justifyContent="between" className="h-full">
//                 <div className="w-40 h-10 border"><InputTime/></div>
//                 <div className="w-40 h-10 border"><InputTime/></div>
//             </StackLayout>
//         </StackLayout>
//      );
// }
const Setting = forwardRef<HTMLDivElement>((props, ref) => {
    return ( 
        <div ref={ref} className="flex flex-row items-center gap-3 w-full px-5 py-1" {...props}>
            <div className="w-full h-[100px] border"> 
                <Textarea id="lyric" className="h-full resize-none"></Textarea>
            </div>
            <span className="material-symbols-outlined text-foreground">delete</span>
            <StackLayout justifyContent="between" className="h-full">
                <div className="w-40 h-10 border"><InputTime id={"startTime"} /></div>
                <div className="w-40 h-10 border"><InputTime id={"endTime"}/></div>
            </StackLayout>
        </div>
    );
});
// export default Setting;