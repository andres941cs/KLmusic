// import { useState } from 'react'

import * as React from 'react'
import { useWavesurfer } from '@wavesurfer/react'
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js'

// npm install @wavesurfer/react
const url = 'https://static.wikia.nocookie.net/bandori/images/8/8b/Yes%21_BanG_Dream%21.ogg'

const AudioPlayer = () => {
  const containerRef = React.useRef(null)

  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: '#2f2f2f',
    progressColor: '#4b4b4b',
    url: url,
    plugins: React.useMemo(() => [Timeline.create()], []),
  })

  const onPlayPause = React.useCallback(() => {
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