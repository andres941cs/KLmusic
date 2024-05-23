import { StackLayout } from "@components/Layouts/StackLayout";
import { Textarea } from "./Textarea";
import InputTime from "./InputTime";
import { Button } from "@components/UI";
import { ChangeEvent, forwardRef, useRef, useState } from "react";
import { saveKaraoke } from "../../../services/Karaoke.services";
import { Karaoke } from "@models/Karaoke";
import SearchSong from "./Search";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/UI/Select";
import { romanized } from "@services/Api.services";
import { insertLyric } from "@services/Lyric.services";
import { useKaraokeStore } from "../../../store/Karaokes";


function Subtitle() {
    const elementsRefs = useRef([]);
    const karaoke = useKaraokeStore(state => state.karaoke);
    const setLyric = useKaraokeStore(state => state.setLyric);
    
    /*______________ Formulario ______________*/
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //CREAR UN OBJETO CON LOS DATOS DEL FORMULARIO
        let settings:any = []
        const mySubtitles = elementsRefs.current;
        mySubtitles.forEach((element:any,index) => {
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

    const [elements, setElements] = useState<JSX.Element[]>([]);
    const duplicarComponente = () => {
        const newElement = <Setting key={elements.length} ref={assignRef(elements.length)}/>;
        setElements(prevElements => [...prevElements, newElement]);
    };
    // ASIGNAR REFERENCIA A LOS ELEMENTOS
    const assignRef = (index:number) => (element:never) => {
        elementsRefs.current[index] = element;
    };
    /*______________ LETRAS ______________*/
    const [lyrics, setLyrics] = useState([]);
    const handleLyrics = (data: [])  => {
        setLyrics(data);
      };
    const [open , setOpen ] = useState(false);

    /*______________ IMPORT ______________*/
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        // setFile(event.target.files[0]);
        console.log(event.target.files![0]);
        const file = event.target.files![0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              // CREAR EL KARAOKE => PENDIENTE SELECT LYRICS Y USER
              console.log(e.target!.result);
              const settings = e.target!.result as string;
              const date = new Date();
              const today = date.toISOString().slice(0, 10);
              const Karaoke:Karaoke ={
                'settings': settings,
                'publication_date': today,
                'isPublished': 1,
                'id_lyric': karaoke.lyric?.id!,
                'id_user': karaoke.id_user!,
            }
            console.log(Karaoke)
            // GUARDAR LOS DATOS EN LA BASE DE DATOS
            // saveKaraoke(Karaoke).then((data) => {
            //     console.log(data)
            // })

            };
            reader.readAsText(file);
          }
      };

    /*______________ ROMANIZED ______________*/
    const romanize =  () => {
        romanized(karaoke.lyric?.lyric!).then((res) => {
            const data = {
                'lyric': res.data,
                'isInstrumental': karaoke.lyric?.isInstrumental!,
                'id_song': karaoke.lyric?.id_song!,
                'url': karaoke.lyric?.url!,
                'language': res.language
            }

            insertLyric(data).then((res) => {
                console.log(res)
            })
        });
    }
    return ( 
        // <form {...props} onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-8">
        <form onSubmit={handleSubmit} className="h-full w-full border-r pr-5">
            <StackLayout className="h-full w-full overflow-x-auto">
                {/* ACTIONS */}
                <StackLayout orientation="row" gap={5}>
                    Options
                    <span onClick={duplicarComponente} className="material-symbols-outlined cursor-pointer">add_circle</span>
                    <label className="contents" htmlFor="fileInput"><span className="material-symbols-outlined cursor-pointer">upload</span></label>
                    <input id="fileInput" type="file" className="hidden" onChange={handleChange} />
                    <span onClick={()=>setOpen(true)} className="material-symbols-outlined cursor-pointer">search</span>
                    <Select onValueChange={(e)=>{setLyric(JSON.parse(e));}}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Lyrics" />
                        </SelectTrigger>
                        <SelectContent>
                            {lyrics.length>0?lyrics:<SelectItem value="Select Lyrics">Select Song</SelectItem>}
                        </SelectContent>
                    </Select>

                    <span onClick={romanize} className="material-symbols-outlined  hover:text-red-700 cursor-pointer">translate</span>
                    <Button type="submit">Save</Button>
                    {/* Pruebas */}
                    <SearchSong onData={handleLyrics} isOpen={open} setIsOpen={setOpen} />
                </StackLayout>
                {elements}
            </StackLayout>
        </form>
     );
}

export default Subtitle;

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