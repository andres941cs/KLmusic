import { StackLayout } from "@components/Layouts/StackLayout";
import { Textarea } from "./Textarea";
import InputTime from "./InputTime";
import { Button } from "@components/UI";
import { useState } from "react";

function Subtitle() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
          
        //CREAR UN OBJETO CON LOS DATOS DEL FORMULARIO
        const settings: FormSettings = {
            lyrics: (event.target as HTMLFormElement).lyric.value,
            // delay: (event.target as HTMLFormElement).delay.value,
            // startTime: (event.target as HTMLFormElement).startTime.value,
            // endTime: (event.target as HTMLFormElement).endTime.value,
        }
        console.log(settings)
    };

    interface FormSettings {
        lyrics: string;
        // startTime: string;
        // endTime: string;
    }
    const [duplicados, setDuplicados] = useState(0);

    const duplicarComponente = () => {
        setDuplicados(duplicados + 1);
    };

    const componentesDuplicados = [];
    for (let i = 0; i < duplicados; i++) {
        componentesDuplicados.push(<Setting key={i} />);
    }
    return ( 
        // <form {...props} onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm space-y-8">
        <form onSubmit={handleSubmit} className="h-full w-full">
        <StackLayout className="h-full w-full border-r  overflow-x-auto">
            {/* ACTIONS */}
            <StackLayout orientation="row">Options
                <button onClick={duplicarComponente}>Duplicar Componente</button>
                <Button>Save</Button>
            </StackLayout>
            {/* LYRICS */}
            {/* <StackLayout className="w-[900px] h-[110px] border"> */}
            <StackLayout className="w-full h-[110px] border">
                {/* <div className="w-full h-24 border">

                </div> */}
                <StackLayout gap={3} orientation="row" className="w-full px-5 py-1">
                    <div className="w-full h-[100px] border"> 
                        <Textarea id="lyric" className="h-full resize-none"></Textarea>
                    </div>
                    <span className="material-symbols-outlined text-foreground">delete</span>
                    <StackLayout justifyContent="between" className="h-full">
                        <div className="w-40 h-10 border"><InputTime/></div>
                        <div className="w-40 h-10 border"><InputTime/></div>
                    </StackLayout>
                </StackLayout>
            </StackLayout>
            
            {componentesDuplicados}
        </StackLayout>
        </form>
     );
}

export default Subtitle;


function Setting() {
    return ( 
        <StackLayout gap={3} orientation="row" className="w-full px-5 py-1">
            <div className="w-full h-[100px] border"> 
                <Textarea id="lyric" className="h-full resize-none"></Textarea>
            </div>
            <span className="material-symbols-outlined text-foreground">delete</span>
            <StackLayout justifyContent="between" className="h-full">
                <div className="w-40 h-10 border"><InputTime/></div>
                <div className="w-40 h-10 border"><InputTime/></div>
            </StackLayout>
        </StackLayout>
     );
}

// export default Setting;