import { Card } from "@components/UI/Card";
import Subtitle from "./components/Subtitle";
import { StackLayout } from "@components/Layouts/StackLayout";

function KaraokePage() {
    return ( 
        <Card className="p-0 overflow-hidden">
            
            {/* LAYOUT */}
            <StackLayout className="h-full">
                <StackLayout orientation="row" className="w-full h-2/3">
                    {/* SUBTITLE */}
                    <Subtitle></Subtitle>
                    {/* PREVIEW */}
                    {/* <Subtitle></Subtitle> */}
                    <Subtitle></Subtitle>
                </StackLayout>
                {/* LINETIME */}
                <div className="w-full h-1/3">
                    {/* <Subtitle></Subtitle> */}
                </div>
                
            </StackLayout>
        </Card>
     );
}

export default KaraokePage;

