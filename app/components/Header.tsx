import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8 flex">
      <div className="flex-initial">
        <Link href="/">
          <a className="text-2xl font-bold">AskTogether</a>
        </Link>
      </div>
      <div className="flex flex-1 justify-end gap-4 items-center">
        <Link href="/about">About</Link>
        <Link href="#">Search</Link>
      </div>
    </header>
  )
}

export default Header