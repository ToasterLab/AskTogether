import React, { useCallback } from "react"
import useValue from 'hooks/useValue'

const SearchBox: React.FC = () => {
  const { value, onTextChange } = useValue()

  const query = encodeURIComponent(`site:ask.tgt.sg ${value}`)
  const searchURL = `https://duckduckgo.com/?q=${query}`

  const onSubmit = useCallback(() => {
    window.open(searchURL)
  }, [searchURL])

  return (
    <form className="pb-6 w-full flex flex-row border-b" onSubmit={onSubmit} >
      <input
        className="py-2 px-4 w-full border border-gray-400 rounded-l"
        type="search" placeholder="Search"
        onChange={onTextChange}
        value={value}
      />
      <a className="p-2 rounded-r b bg-gray-800 text-white" href={searchURL}>
        SEARCH
      </a>
      <input type="submit" className="hidden" />
    </form>
  )
}

export default SearchBox