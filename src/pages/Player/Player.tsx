import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import './Player.css'
import {procesarSubtitulos} from './parser'
import { format } from '@utils/index'
// import { putLyricsInPlace, updateActiveLyrics } from './lyric'
// export interface ISubtitles {
//     texto: string;
//     tiempoInicio: number;
//     tiempoFin: number;
// }
// export interface ISubtitles {
//     subtitle: ISubtitles[];
// }
import { putLyricsInPlace, reCenter, updateActiveLyrics } from './lyric'
import Slider from '@components/UI/Slider'

{/* <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' /> */}
function Player(data:any){
    // const [url, setUrl] = useState(null);
    // const [loaded, setLoaded] = useState(0);
    const [light] = useState(false);
    const [muted] = useState(false);
    const [controls] = useState(false);
    const [playbackRate] = useState(1.0);

    const [playing, setPlaying] = useState(false);
    // const [controls, setControls] = useState(false);
    // const [light, setLight] = useState(false);
    const [volume, setVolume] = useState(0.8);
    // const [muted, setMuted] = useState(false);
    const [played, setPlayed] = useState(0);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [duration, setDuration] = useState(0);
    // const [playbackRate, setPlaybackRate] = useState(1.0);
    const [loop] = useState(false);
    // const [loop, setLoop] = useState(false);
    const [seeking, setSeeking] = useState(false);
    const player = useRef<ReactPlayer>(null);
    const divLetraRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    interface IState {
        loaded: number;
        loadedSeconds: number;
        played: number;
        playedSeconds: number;
    }

    
    // PRUEBAS

    const karaoke = data['data'];
    // PROCESAR LOS SUBTILULOS
    
    let subtitles:any = []
    let dataProcesada = procesarSubtitulos(karaoke.settings);
    subtitles = dataProcesada
    // console.log("Subtitulos Cargados");
    // console.log(subtitles)
    // const [elements, setElements] = useState<JSX.Element[]>([]);
    const handlePlay = () => {
        console.log('onPlay');
        setPlaying(true);
        // REPRODUCIR AL CAMBIAR DEL ESTADO
        
        putLyricsInPlace(subtitles);
      };

    const handlePlayPause = () => {
        setPlaying(!playing)
    }
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


    const handleVolumeChange = (e:any) => {
        console.log('handleVolumeChange', volume)
        setVolume(e/100)
    }

    // const handleToggleMuted = () => {
    //     setMuted(!muted)
    // }

    /* METODOS PARA EL SEEKBAR */
    const handleSeekMouseDown = () => {
        setSeeking(true)
    }
    
    const  handleSeekChange = (e:ChangeEvent<HTMLInputElement>) => {
        // console.log('handleSeekChange', e.target.value)
        setPlayed(parseFloat(e.target.value))
        // var input = document.querySelector("#myInput");
        const progress = ((parseFloat(e.target.value) / 0.999) * 100);
        inputRef.current!.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
        // input!.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
    }
    
    const  handleSeekMouseUp = (e:MouseEvent<HTMLInputElement>) => {
        setSeeking(false)
        const input = e.target as HTMLInputElement;
        console.log(input.value)
        // CREAR REFERENCIA AL REPRODUCTOR
        player.current!.seekTo(parseFloat(input.value))
    }
    const handleProgress = (state:IState) => {
        console.log('onProgress', state);
        setPlayedSeconds(state.playedSeconds);
        
        // We only want to update time slider if we are not currently seeking
        if (!seeking) {
            setPlayed(state.played)
            updateActiveLyrics(state.playedSeconds, subtitles);
            reCenter()
            // var input = document.querySelector("#myInput");
            // const progress = ((played / 0.999999) * 100);
            const progress = Math.ceil(played * 100);
            // console.log('PORCENTAJE DE LA BARRA: ',progress+'%')
            inputRef.current!.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
            // input.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
        }
    }
      
    const  handleDuration = (duration:number) => {
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
        <div className='flex flex-col h-full overflow-hidden relative'>
        {/*  absolute -> Mejoras scale 1.2 ->  Animcion Para el comienzo y para el final quitar ultimos 3s*/}
        <ReactPlayer ref={player}
            className="hidden"
            width="100%"
            height="90%"
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
            {/* Lyrics */}
        <div className='lyrics-container'>
            <div ref={divLetraRef} id='lyrics'></div>
        </div>
            {/* PlayerController */}
            <div className='flex items-center bg-background h-20 w-full gap-1'>
            {/* <!-- Seekbar --> */}
            <span onClick={handlePlayPause} className="material-symbols-outlined cursor-pointer hover:text-red-600">{playing ? 'pause' : 'play_arrow'}</span>
                {/* <span onClick={handlePlay} className="material-symbols-outlined cursor-pointer hover:text-red-600">play_arrow</span>
                <span onClick={handlePause} className="material-symbols-outlined cursor-pointer hover:text-red-600">pause</span> */}
                <span>{format(playedSeconds)}</span>
                <input id='myInput' ref={inputRef} className='w-full bg-slate-500'
                    type='range' min={0} max={0.999999} step='any'
                    value={played}
                    onMouseDown={()=>handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                  />
                  <span>{format(duration)}</span>
                  <span className="material-symbols-outlined cursor-pointer hover:text-red-600">volume_up</span>
                  <div className='w-24'><Slider min={0} max={100} step={1}  value={[volume*100]} onValueChange={handleVolumeChange}></Slider></div>
            </div>
        </div>
    )
}
export default Player;