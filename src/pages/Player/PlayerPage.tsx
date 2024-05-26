import { useLoaderData } from "react-router-dom";
import Player from "./Player";
import { Karaoke } from "@models/Karaoke";
import { Card } from "@components/UI/Card";

function PlayerPage(){
    const karaoke = useLoaderData() as Karaoke;

    return(
        <Card className="overflow-hidden">
            <Player data={karaoke}/>  
        </Card>
    )
}

export default PlayerPage;