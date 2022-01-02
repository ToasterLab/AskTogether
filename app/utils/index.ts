import { remark } from 'remark'
import html from 'remark-html'
import strip from 'strip-markdown'

export const getDomain = (url: string) => {
  const u = new URL(url)
  return u.hostname.replace(/^www\./, ``)
}

export const mdToHTML = (md: string) => {
  return remark().use(html).processSync(md).toString()
}

export const mdToText = (md: string) => {
  return remark().use(strip).processSync(md).toString()
}