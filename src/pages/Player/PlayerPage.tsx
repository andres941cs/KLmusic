import { Card } from "../../components/UI/Card";

// Componente Player
interface Karaoke{
    setting:string;
    url:string;
    song:string;
    author:string;
}
/*
EL REPRODUCTO TIENE QUE REPRODUCIR EL VIDEO DE FONDO
BOTON PLAY => INICIA EL VIDEO Y INICIA EL KARAOKE

*/
function PlayerPage(data:Karaoke){
    return(
        <Card>
            <iframe src={data.url}></iframe>
        </Card>
    )
}

export default PlayerPage;