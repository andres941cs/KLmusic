import Subtitle from "./components/Subtitle";
import { StackLayout } from "@components/Layouts/StackLayout";
import { useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
import { useKaraokeStore } from "@store/Karaokes";
import { getProfile } from "@services/UserData";


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
        <StackLayout className="h-full w-full text-foreground overflow-hidden">
            {/* LAYOUT */}
            <StackLayout className="h-full w-full">
                <StackLayout orientation="row" className="w-full h-2/3">
                    {/* SUBTITLE */}
                    <Subtitle/>
                    {/* PREVIEW */}
                    <div className="h-full w-full overflow-y-auto">
                        <pre className="py-5 mx-[20%] text-center font-[blinker]">{karaoke.lyric?.lyric}</pre>
                    </div>
                </StackLayout>
                {/* LINE TIME */}
                <div className="w-full h-1/3 grid border-t content-center gap-5 px-5">
                    <AudioPlayer></AudioPlayer>
                </div>
            </StackLayout>
        </StackLayout>
     );
}

export default KaraokePage;

