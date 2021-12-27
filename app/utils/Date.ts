import { format, parseISO } from 'date-fns'

const humanise = (date: string) => {
  return format(parseISO(date), `d LLL yyyy`)
}

export default {
  humanise
}