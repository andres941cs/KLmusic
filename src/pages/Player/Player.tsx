import { Button } from '@components/UI'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import './Player.css'
import { letraPrueba } from './LetraPrueba'
import {procesarSubtitulos} from './parser'
// Only loads the YouTube player
<ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
function Player(){
    const [url, setUrl] = useState(null);
    const [pip, setPip] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [controls, setControls] = useState(false);
    const [light, setLight] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    const [played, setPlayed] = useState(0);
    const [loaded, setLoaded] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1.0);
    const [loop, setLoop] = useState(false);
    const player = useRef(null);
    const divLetraRef = useRef<HTMLDivElement>(null);
    
    // PRUEBAS
    const data = {
        // url:'https://www.youtube.com/watch?v=pYNYhSsR8EE'
        // url:'https://www.youtube.com/embed/pYNYhSsR8EE'
        url:'https://www.youtube.com/watch?v=_KSyWS8UgA4'
    }
    // PROCESAR LOS SUBTILULOS
    let subtitles = []
    let dataProcesada = procesarSubtitulos(letraPrueba);
    subtitles = dataProcesada
    console.log("Subtitulos Cargados");
    // console.log(subtitles)
    // const [elements, setElements] = useState<JSX.Element[]>([]);
    const handlePlay = () => {
        console.log('onPlay');
        setPlaying(true);
        // REPRODUCIR AL CAMBIAR DEL ESTADO
        if(playing){
            // CODIGO PARA INSERTAR LA LETRA
            const divLetra = divLetraRef.current;
            subtitles.forEach(item => {
                const timeoutId = setTimeout(() => {
                    const span = document.createElement('span');
                    span.id = item.numero.toString();
                    span.className = 'line';
                    span.textContent = item.texto;
                    divLetra?.appendChild(span);
                }, item.tiempoInicio);
            });
            // CODIGO PARA SINCRONIZAR LOS SUBTITULOS
            var currentTime = 0
            setInterval(function() {
                console.log('Tiempo actual del video:', currentTime);
                const currentSubtitle = subtitles.find(subtitle => currentTime*1000 >= subtitle.tiempoInicio && currentTime*1000 <= subtitle.tiempoFin);
                if (currentSubtitle) {
                    const lineActive = document.getElementById(currentSubtitle.numero.toString());
                    lineActive!.classList.add('active');
                    lineActive!.scrollIntoView({
                        block: "start", behavior: "smooth"
                    });
                
                } 
                // else {
                //     subtitles.forEach(subtitle => {
                //         const line = document.getElementById(subtitle.numero.toString());
                //         line!.classList.remove('active');
                //     });
                // }
                currentTime++;
            }, 1000); // Intervalo de 1000 milisegundos (1 segundo)
        }
      };
    // const [lyrics, setLyrics] = useState<React.ReactElement[]>([]);
    useEffect(() => {
        
        // const divLetra = divLetraRef.current;
        // console.log(divLetra)
        // subtitles.forEach(item => {
        //     const timeoutId = setTimeout(() => {
        //         const span = document.createElement('span');
        //         span.textContent = item.texto;
        //         divLetra?.appendChild(span);
        //       }, item.tiempoInicio);
        // });
    
    }, []);
    return(
        <>
        {/* <iframe src={data.url}></iframe> */}
        <ReactPlayer ref={player}
            className="hidden"
            width="100%"
            height="100%"
            url='https://www.youtube.com/watch?v=_KSyWS8UgA4'
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onPlay={handlePlay}
            // onEnablePIP={handleEnablePIP}
            // onDisablePIP={handleDisablePIP}
            // onPause={handlePause}
            // onPlaybackRateChange={handleOnPlaybackRateChange}
            // onEnded={handleEnded}
            onError={(e) => console.log('onError', e)}
            // onProgress={handleProgress}
            // onDuration={handleDuration}
            />

        <div className='lyrics-container'>
            <div ref={divLetraRef} id='lyrics'></div>
        </div>
        <Button onClick={handlePlay}>Play</Button>
        </>
    )
}
export default Player;