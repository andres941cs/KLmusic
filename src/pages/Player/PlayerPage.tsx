import { useLoaderData } from "react-router-dom";
import { Card } from "../../components/UI/Card";
import Player from "./Player";

// Componente Player
interface Karaoke{
    setting:string;
    lyrics:string;
    id_user:string;
}
/*
EL REPRODUCTO TIENE QUE REPRODUCIR EL VIDEO DE FONDO
BOTON PLAY => INICIA EL VIDEO Y INICIA EL KARAOKE HECHO

*/
// function PlayerPage(data:Karaoke){
    function PlayerPage(){
        const karaoke = useLoaderData() as Karaoke;
        // console.log(karaoke);
        // PRUEBAS
        // const data = {
        //     // url:'https://www.youtube.com/watch?v=pYNYhSsR8EE'
        //     url:'https://www.youtube.com/embed/pYNYhSsR8EE'
        // }
    return(
        <Card className="overflow-hidden">
            {/* <video src={data.url}></video> */}
            {/* <iframe src={data.url}></iframe> */}
            <Player data={karaoke}/>
            
        </Card>
    )
}

export default PlayerPage;