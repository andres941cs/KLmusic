import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import './Player.css'
import {procesarSubtitulos} from './parser'
import { format } from '@utils/index'
import { putLyricsInPlace, reCenter, updateActiveLyrics } from './lyric'
import Slider from '@components/UI/Slider'
import { Karaoke } from '@models/Karaoke'

function Player({data}:{data:Karaoke}){
    const [light] = useState(false);
    const [controls] = useState(false);
    const [playbackRate] = useState(1.0);

    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.8);
    const [muted, setMuted] = useState(false);
    const [played, setPlayed] = useState(0);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [duration, setDuration] = useState(0);
    // const [playbackRate, setPlaybackRate] = useState(1.0);
    const player = useRef<ReactPlayer>(null);
    const divLetraRef = useRef<HTMLDivElement>(null);

    interface IState {
        loaded: number;
        loadedSeconds: number;
        played: number;
        playedSeconds: number;
    }
    interface ISubtitles {
        numero: number;
        tiempoInicio: number;
        tiempoFin: number;
        texto: string;
    }

    // PROCESAR LOS SUBTILULOS
    const [subtitles, setSubtitles] = useState<ISubtitles[]>([])

    useEffect(() => {
        const dataProcesada = procesarSubtitulos(data.settings);
        setSubtitles(dataProcesada)
    },[])

    const handlePlay = () => {
        setPlaying(true);
        // REPRODUCIR AL CAMBIAR DEL ESTADO
        putLyricsInPlace(subtitles);
      };

    const handlePlayPause = () => {
        setPlaying(!playing)
    }


    const handleVolumeChange = (e:any) => {
        console.log('handleVolumeChange', volume)
        setVolume(e/100)
    }

    const handleToggleMuted = () => {
        setMuted(!muted)
    }

    /* METODOS PARA EL SEEKBAR */
    const  handleSeekChange = (e:number[]) => {
        // CAMBIAR EL VALOR DEL INPUT Y DEL VIDEO
        const progress = e[0]/100;
        setPlayed(progress)
        player.current!.seekTo(progress)
    }
    
    const handleProgress = (state:IState) => {
        setPlayedSeconds(state.playedSeconds);
        setPlayed(state.played)
        updateActiveLyrics(state.playedSeconds, subtitles);
        reCenter();
    }
      
    const  handleDuration = (duration:number) => {
        setDuration(duration)
      }
    
    return(
        <div className='flex flex-col h-full overflow-hidden relative puff-in-center'>
        {/*  absolute -> Mejoras scale 1.2 ->  Animcion Para el comienzo y para el final quitar ultimos 3s*/}
        <ReactPlayer ref={player}
            className="absolute"
            width="100%"
            height="90%"
            url={data.lyric?.url}
            playing={playing}
            controls={controls}
            light={light}
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
            <span onClick={handlePlayPause} className="material-symbols-outlined cursor-pointer hover:text-primary">{playing ? 'pause' : 'play_arrow'}</span>
                <span>{format(playedSeconds)}</span>
                  <Slider min={0} max={100} step={1}  value={[played*100]} onValueChange={handleSeekChange}></Slider>
                  <span>{format(duration-1)}</span>
                  <span onClick={handleToggleMuted} className="material-symbols-outlined cursor-pointer hover:text-primary">{muted ? 'no_sound' : 'volume_up'}</span>
                  <div className='w-24'><Slider min={0} max={100} step={1}  value={[volume*100]} onValueChange={handleVolumeChange}></Slider></div>
            </div>
        </div>
    )
}
export default Player;