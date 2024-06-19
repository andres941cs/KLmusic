import { COLORS, LIGHT_COLORS } from "./constants"

export function format(seconds: number): string {
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = pad(date.getUTCSeconds())
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`
    }
    return `${mm}:${ss}`
  }
  
  function pad(string: number) {
    return ('0' + string).slice(-2)
  }

export function getYears(date: string): string {
    const year = new Date(date).getFullYear()
    return year.toString()
  }

export function getRamdomColor(){
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains('dark')) {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
  } else {
    return LIGHT_COLORS[Math.floor(Math.random() * COLORS.length)]
  }
    
  }

export function arrayToString(array: string[]): string {
    return array.join(' ')
}

export function getToday(): string {
    const date = new Date()
    return date.toISOString().slice(0, 10)
}