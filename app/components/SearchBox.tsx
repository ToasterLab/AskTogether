const SearchBox: React.FC = () => {
  return (
    <div className="pb-6 w-full border-b">
      <input
        className="py-2 px-4 w-full border border-gray-400 rounded"
        type="search" placeholder="Search  | NOTE: DOES NOT WORK YET" />
    </div>
  )
}

export default SearchBox