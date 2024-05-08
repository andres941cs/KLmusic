import { useWavesurfer } from '@wavesurfer/react'
import { useCallback, useMemo, useRef } from 'react'
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js'

// npm install @wavesurfer/react
// const url = 'https://static.wikia.nocookie.net/bandori/images/8/8b/Yes%21_BanG_Dream%21.ogg'
const url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
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