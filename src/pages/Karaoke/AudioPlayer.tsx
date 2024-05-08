import { useWavesurfer } from '@wavesurfer/react'
import { useCallback, useMemo, useRef } from 'react'
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js'

// npm install @wavesurfer/react
// const url = 'https://static.wikia.nocookie.net/bandori/images/8/8b/Yes%21_BanG_Dream%21.ogg'
const url = 'https://p.scdn.co/mp3-preview/5184d19d1b7fcc3e7c067e38af45a7cc80851440?cid=c585723063d1410fbd32b278bfdfed80'
const AudioPlayer = () => {
  const containerRef = useRef(null)

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: '#2f2f2f',
    progressColor: '#4b4b4b',
    url: url,
    plugins: useMemo(() => [Timeline.create()], []),
  })

  const onPlayPause = useCallback(() => {
    console.log(currentTime)
    wavesurfer && wavesurfer.playPause()
  }, [wavesurfer])

  return (
    <>
      <div ref={containerRef} className='w-full' />
        <button onClick={onPlayPause} style={{ minWidth: '5em' }}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
    </>
  )
}
export default AudioPlayer