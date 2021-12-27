import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="container max-w-screen-lg mx-auto px-4 mt-8 mb-8 flex">
      <div className="flex-initial">
        <h1 className="text-2xl font-bold">AskTogether</h1>
      </div>
      <div className="flex flex-1 justify-end gap-4 items-center">
        <a href="#">About</a>
        <a href="#">About</a>
      </div>
    </header>
  )
}

export default Header