import { useLoaderData } from "react-router-dom";
import Player from "./Player";
import { Karaoke } from "@models/Karaoke";

function PlayerPage(){
    const karaoke = useLoaderData() as Karaoke;

    return(
        <div className="h-full w-full text-card-foreground overflow-auto">
            <Player data={karaoke}/>  
        </div>
    )
}

export default PlayerPage;