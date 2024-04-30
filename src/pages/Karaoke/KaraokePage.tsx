import { Card } from "@components/UI/Card";
import Subtitle from "./components/Subtitle";
import { StackLayout } from "@components/Layouts/StackLayout";
// import { letraPrueba } from "../Player/LetraPrueba";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

function KaraokePage() {
    const  [selectedLyric, setSelectedLyric] = useState('');
    const handleSelectedData = (data: string)  => {
        setSelectedLyric(data);
      };
    return ( 
        <Card className="p-0 overflow-hidden">
            {/* LAYOUT */}
            <StackLayout className="h-full">
                <StackLayout orientation="row" className="w-full h-2/3">
                    {/* SUBTITLE */}
                    <Subtitle onData={handleSelectedData}></Subtitle>
                    {/* PREVIEW */}
                    {/* <Subtitle></Subtitle> */}
                    <div className="h-full w-full overflow-y-auto">{selectedLyric}</div>
                </StackLayout>
                {/* LINE TIME */}
                <div className="w-full h-1/3 grid border-t content-center">
                <AudioPlayer></AudioPlayer>
                </div>
                
                
            </StackLayout>
        </Card>
     );
}

export default KaraokePage;

