import { Card } from "../../components/UI/Card";
import Player from "./Player";

// Componente Player
interface Karaoke{
    setting:string;
    url:string;
    song:string;
    author:string;
}
/*
EL REPRODUCTO TIENE QUE REPRODUCIR EL VIDEO DE FONDO
BOTON PLAY => INICIA EL VIDEO Y INICIA EL KARAOKE HECHO

*/
// function PlayerPage(data:Karaoke){
    function PlayerPage(){
        // PRUEBAS
        const data = {
            // url:'https://www.youtube.com/watch?v=pYNYhSsR8EE'
            url:'https://www.youtube.com/embed/pYNYhSsR8EE'
        }
    return(
        <Card>
            {/* <video src={data.url}></video> */}
            {/* <iframe src={data.url}></iframe> */}
            <Player/>
            
        </Card>
    )
}

export default PlayerPage;