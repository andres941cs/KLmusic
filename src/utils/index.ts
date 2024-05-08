import { COLORS, LIGHT_COLORS } from "./constantes"

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
// function getTheme() {
//   const htmlElement = document.documentElement;
//   if (htmlElement.classList.contains('dark')) {
//     return 'dark';
//   } else {
//     return 'light';
//   }
// }

// function getTheme() {
//   const isDarkTheme = window.matchMedia('(prefers-color: dark)').matches;
//   if (isDarkTheme) {
//     return 'dark';
//   } else {
//     return 'light';
//   }
// }