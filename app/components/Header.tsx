import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="border-b w-full">
      <div className="container max-w-screen-xl mx-auto px-4 mt-4 mb-4 flex text-gray-700">
        <div className="flex-initial">
          <Link href="/">
            <a className="text-2xl font-bold hover:text-black">AskTogether</a>
          </Link>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <Link href="/about">
            <a className="hover:text-black">About</a>
          </Link>
          <a className="hover:text-black" href="https://is25icte78n.typeform.com/to/ulE3sOKc">Submit</a>
        </div>
      </div>
    </header>
  )
}

export default Header