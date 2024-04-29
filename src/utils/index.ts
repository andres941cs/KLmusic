export function format (seconds: number): string {
    const date = new Date(seconds * 1000)
    const hh = date.getUTCHours()
    const mm = date.getUTCMinutes()
    const ss = pad(date.getUTCSeconds())
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`
    }
    return `${mm}:${ss}`
  }
  
  function pad (string: number) {
    return ('0' + string).slice(-2)
  }

export function getYears (date: string): string {
    const year = new Date(date).getFullYear()
    return year.toString()
  }