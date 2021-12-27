import { IoLogoGithub } from 'react-icons/io5'

const Footer: React.FC = () => {
  return (
    <footer className="border-t w-full">
      <div className="container max-w-screen-xl mx-auto px-4 mt-4 mb-4 flex flex-row justify-center">
        <a className="flex flex-row items-center text-center text-gray-500 hover:text-black" href="https://github.com/hueyy/AskTogether">
          source code on&nbsp;&nbsp;
          <IoLogoGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer