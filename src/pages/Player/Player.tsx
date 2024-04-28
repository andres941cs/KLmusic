import { Button } from '@components/UI'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import './Player.css'
import { letraPrueba } from './LetraPrueba'
import {procesarSubtitulos} from './parser'

{/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
function Player(data:any){
    const [url, setUrl] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [controls, setControls] = useState(false);
    const [light, setLight] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    const [played, setPlayed] = useState(0);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [loaded, setLoaded] = useState(0);
    const [duration, setDuration] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(1.0);
    const [loop, setLoop] = useState(false);
    const [seeking, setSeeking] = useState(false);
    const player = useRef(null);
    const divLetraRef = useRef<HTMLDivElement>(null);
    
    // PRUEBAS
    // console.log(data['data'])
    const karaoke = data['data'];
    // const data = {
    //     // url:'https://www.youtube.com/watch?v=pYNYhSsR8EE'
    //     // url:'https://www.youtube.com/embed/pYNYhSsR8EE'
    //     url:'https://www.youtube.com/watch?v=_KSyWS8UgA4'
    // }
    // PROCESAR LOS SUBTILULOS
    let subtitles = []
    let dataProcesada = procesarSubtitulos(karaoke.settings);
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

    /* METODOS PARA EL SEEKBAR */
    const handleSeekMouseDown = e => {
        setSeeking(true)
    }
    
    const  handleSeekChange = e => {
        console.log('handleSeekChange', e.target.value)
        setPlayed(parseFloat(e.target.value))
        var input = document.querySelector("#myInput");
        const progress = ((e.target.value / 0.999) * 100);
        input.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
    }
    
    const  handleSeekMouseUp = e => {
        setSeeking(false)
        // CREAR REFERENCIA AL REPRODUCTOR
        player.current.seekTo(parseFloat(e.target.value))
    }
    const handleProgress = state => {
        console.log('onProgress', state)
        setPlayedSeconds(state.playedSeconds)
        // We only want to update time slider if we are not currently seeking
        if (!seeking) {
            setPlayed(state.played)
            var input = document.querySelector("#myInput");
            // const progress = ((played / 0.999999) * 100);
            const progress = Math.ceil(played * 100);
            console.log('PORCENTAJE DE LA BARRA: ',progress+'%')
            input.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
        }
    }
      
    const  handleDuration = (duration) => {
        console.log('onDuration', duration)
        setDuration(duration)
      }
    
    // const  handleProgress = state => {
    // console.log('onProgress', state)
    // // We only want to update time slider if we are not currently seeking
    // if (!this.state.seeking) {
    //     this.setState(state)
    // }
    // }
    return(
        <div className='flex flex-col h-full'>
        {/* <iframe src={data.url}></iframe> */}
        <ReactPlayer ref={player}
            className="hidden"
            width="100%"
            height="100%"
            url={karaoke.lyric.url}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onPlay={handlePlay}
            // onPause={handlePause}
            // onPlaybackRateChange={handleOnPlaybackRateChange}
            // onEnded={handleEnded}
            onError={(e) => console.log('onError', e)}
            onProgress={handleProgress}
            onDuration={handleDuration}
            />

        <div className='lyrics-container'>
            <div ref={divLetraRef} id='lyrics'></div>
        </div>
            {/* PlayerController */}
            <div className='flex items-center bg-black h-20 w-full'>
            {/* <!-- Seekbar --> */}
            {/* <div className="seekbar-container">
                <span id="time-elapsed"></span>
                <div id="seekbar">
                    <div id="seekbar-bg"></div>
                    <div id="seekbar-fg"></div>
                    <div id="seekbar-ball"></div>
                </div>
                <span id="time-total"></span>
            </div> */}
                {/* <Button onClick={handlePlay}>Play</Button> */}
                <span onClick={handlePlay} className="material-symbols-outlined cursor-pointer">play_arrow</span>
                <span>{Math.ceil(playedSeconds)}</span>
                <input id='myInput' className='w-full bg-slate-500'
                    type='range' min={0} max={0.999999} step='any'
                    value={played}
                    onMouseDown={handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                  />
                  <span>{duration}</span>
            </div>
        </div>
    )
}
export default Player;

// const PlayerController = () => {
//     return (
//         <div>
//             <Player />
//         </div>
//     )
// }