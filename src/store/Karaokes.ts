import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { Lyric } from '@models/Lyric'

/* INTERFACE STATE */
interface State {
  karaoke:{id_user?: number, lyric?: Lyric}
  setUserData: (id: number) => void
  setLyric: (lyric: Lyric) => void
}

/* ZUSTAND */
export const useKaraokeStore = create<State>()(devtools((set, get) => {
  return {
    karaoke: {},

    setUserData: (id: number) => {
      set({ karaoke: {...get().karaoke, id_user: id} },false, 'SET_USER_DATA')
    },

    setLyric: (lyric: Lyric) => {
      console.log(lyric)
      set({ karaoke: {...get().karaoke, lyric: lyric} },false, 'SET_LYRIC')
    }

  }
}))