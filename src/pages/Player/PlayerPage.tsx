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
            <iframe src={data.url}></iframe>
            {/* <iframe src={data.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/pYNYhSsR8EE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        </Card>
    )
}

export default PlayerPage;