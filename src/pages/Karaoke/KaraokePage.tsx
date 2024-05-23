import { Card } from "@components/UI/Card";
import Subtitle from "./components/Subtitle";
import { StackLayout } from "@components/Layouts/StackLayout";
import { useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import { useKaraokeStore } from "../../store/Karaokes";
import { getProfile } from "@services/User.services";


function KaraokePage() {
    const karaoke = useKaraokeStore(state => state.karaoke);
    const setUser = useKaraokeStore(state => state.setUserData);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        getProfile(token!).then((response) => {
            setUser(response.id);
        });
    }, []);
    
    return ( 
        <Card className="p-0 overflow-hidden">
            {/* LAYOUT */}
            <StackLayout className="h-full">
                <StackLayout orientation="row" className="w-full h-2/3">
                    {/* SUBTITLE */}
                    <Subtitle/>
                    {/* PREVIEW */}
                    <div className="h-full w-full overflow-y-auto">{karaoke.lyric?.lyric}</div>
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

