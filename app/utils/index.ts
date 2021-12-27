import { remark } from 'remark'
import html from 'remark-html'

export const getDomain = (url: string) => {
  const u = new URL(url)
  return u.hostname.replace(/^www\./, '')
}

export const mdToHTML = (md: string) => {
  return remark().use(html).processSync(md).toString()
}