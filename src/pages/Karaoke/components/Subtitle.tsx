import { StackLayout } from "@components/Layouts/StackLayout";
import { Textarea } from "./Textarea";
import InputTime from "./InputTime";
import { Button } from "@components/UI";
import { ChangeEvent, forwardRef, useRef, useState } from "react";
import { Karaoke } from "@models/Karaoke";
import SearchSong from "./Search";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/UI/Select";
import { romanized } from "@services/ApiData";
import { insertLyric } from "@services/LyricData";
import { useKaraokeStore } from "@store/Karaokes";
import { getToday } from "@utils/index";
import { saveKaraoke } from "@services/KaraokeData";
import { Toaster, toast } from 'sonner'
import { AddCircleIcon } from "@assets/Icons/Add";
import UploadIcon from "@assets/Icons/Upload";
import SearchIcon from "@assets/Icons/SearchIcon";
import TranslateIcon from "@assets/Icons/Translate";
import DeleteIcon from "@assets/Icons/Delete";

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

        let cadena = "";
        settings.forEach((subtitulo:any) => {
            cadena += `${subtitulo.number}\n${subtitulo.startTime} --> ${subtitulo.endTime}\n${subtitulo.text}\n\n`;
        });

        const Karaoke:Karaoke ={
            'settings': cadena,
            'publication_date': getToday(),
            'isPublished': 1,
            'id_lyric': karaoke.lyric?.id!,
            'id_user': karaoke.id_user!,
        }

        // GUARDAR LOS DATOS EN LA BASE DE DATOS
        if(Karaoke.settings === "") return toast.error('Create a karaoke');
        saveKaraoke(Karaoke).then((data) => {
            toast.success(data);
        })
    };

    interface FormSettings {
        number:number;
        startTime: string;
        endTime: string;
        text: string;
    }
    interface IComponents { id: number; component: JSX.Element; }
    const [elements, setElements] = useState<IComponents[]>([]);
    const removeItem = (index:number) => {
        setElements(prevElements => prevElements.filter((_) => _.id !== index));
      };
    const duplicarComponente = () => {
        const newElement = <Setting key={elements.length} ref={assignRef(elements.length)} children={
            <DeleteIcon size={32} className="fill-foreground hover:fill-primary cursor-pointer" onClick={()=>removeItem(elements.length)} /> 
        } />;
        setElements(prevElements => [...prevElements, {id: elements.length,component:newElement }]);
    };
    // ASIGNAR REFERENCIA A LOS ELEMENTOS
    const assignRef = (index:number) => (element:never) => {
        elementsRefs.current[index] = element;
    };
    /*______________ LYRICS ______________*/
    const [lyrics, setLyrics] = useState([]);
    const handleLyrics = (data: [])  => {
        setLyrics(data);
      };
    const [open , setOpen ] = useState(false);

    /*______________ IMPORT ______________*/
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const settings = e.target!.result as string;

              const Karaoke:Karaoke ={
                'settings': settings,
                'publication_date': getToday(),
                'isPublished': 1,
                'id_lyric': karaoke.lyric?.id!,
                'id_user': karaoke.id_user!,
            }

            // GUARDAR LOS DATOS EN LA BASE DE DATOS
            if(Karaoke.id_lyric === undefined) return toast.error('Select a Lyrics');
            saveKaraoke(Karaoke).then((data) => {
                toast.success(data);
            })

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
                toast.success(res)
            })
        });
    }
    return ( 
        <form onSubmit={handleSubmit} className="h-full w-full border-r py-5">
            <StackLayout className="h-full w-full overflow-x-auto">
                {/* ACTIONS */}
                <StackLayout orientation="row" gap={5} className="">
                    Options
                    <AddCircleIcon onClick={duplicarComponente} className="fill-foreground hover:fill-primary cursor-pointer" />
                    <label className="contents" htmlFor="fileInput">
                        <UploadIcon className="fill-foreground hover:fill-primary cursor-pointer" />
                    </label>
                    <input id="fileInput" type="file" className="hidden" onChange={handleChange} />
                    <SearchIcon onClick={()=>setOpen(true)} className="fill-foreground hover:fill-primary cursor-pointer" />
                    <Select onValueChange={(e)=>{setLyric(JSON.parse(e));}}>
                        <SelectTrigger className="!w-auto">
                            <SelectValue placeholder="Lyrics" />
                        </SelectTrigger>
                        <SelectContent className="!w-auto">
                            {lyrics.length>0?lyrics:<SelectItem disabled value="Select Song">Select</SelectItem>}
                        </SelectContent>
                    </Select>

                    <button disabled={karaoke.lyric?false:true} onClick={romanize} className="cursor-pointer disabled:opacity-50 disabled:hover:text-current disabled:cursor-not-allowed">
                        <TranslateIcon className={`${karaoke.lyric&&'hover:fill-primary'}`}/>
                    </button>
                    <Button className="!w-auto" disabled={karaoke.lyric?false:true} type="submit">Save</Button>
                    <SearchSong onData={handleLyrics} isOpen={open} setIsOpen={setOpen} />
                </StackLayout>
                {elements.map(item => ({...item.component}))}
            </StackLayout>
            <Toaster richColors/>
        </form>
     );
}

export default Subtitle;

interface ISetting extends React.HTMLAttributes<HTMLDivElement>{children?:React.ReactNode}
const Setting = forwardRef<HTMLDivElement,ISetting>(({children}, ref) => {
    return ( 
        <div ref={ref} className="flex flex-row items-center gap-3 w-full px-5 py-1" >
            <div className="w-full h-[100px] border"> 
                <Textarea id="lyric" className="h-full resize-none"></Textarea>
            </div>
                {children}
            <StackLayout justifyContent="between" className="h-full">
                <div className="w-40 h-10 border"><InputTime id={"startTime"} /></div>
                <div className="w-40 h-10 border"><InputTime id={"endTime"}/></div>
            </StackLayout>
        </div>
        
    );
});