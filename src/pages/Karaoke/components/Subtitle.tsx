import { StackLayout } from "@components/Layouts/StackLayout";
import { Textarea } from "./Textarea";
import InputTime from "./InputTime";
import { Button } from "@components/UI";
import { forwardRef, useRef, useState } from "react";
import { searchSongs } from "../../../services/Songs.services";

function Subtitle() {
    const elementsRefs = useRef([])
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("BOTON SAVE...")
        //CREAR UN OBJETO CON LOS DATOS DEL FORMULARIO
        console.log(elements)
        let settings = []
        const mySubtitles = elementsRefs.current;
        mySubtitles.forEach((element,index) => {
            console.log(index);
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
        console.log(settings)
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
    const assignRef = (index:number) => (element) => {
        elementsRefs.current[index] = element;
    };
    
    // Función para obtener los resultados de las canciones
    const [value, setValue] = useState('');
    const getSuggestions  = (event) => {
        setValue(event.target.value);
        if(value.length >= 2) {
            searchSongs(value).then((data) => {
                console.log(data)
            })
        }
    }
    return ( 
        // <form {...props} onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-8">
        <form onSubmit={handleSubmit} className="h-full w-full border-r pr-5">
        <StackLayout className="h-full w-full overflow-x-auto">
            {/* ACTIONS */}
            <StackLayout orientation="row" gap={5}>
                Options
                <button onClick={duplicarComponente}><span className="material-symbols-outlined">add_circle</span></button>
                <input value={value} onChange={getSuggestions} className="text-black" placeholder="Song" />
                <Button>Save</Button>
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
        <div ref={ref} className="flex flex-row items-center gap-3 w-full px-5 py-1">
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