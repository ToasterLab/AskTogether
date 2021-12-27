import { IoLogoGithub } from 'react-icons/io5'

const Footer: React.FC = () => {
  return (
    <footer className="container max-w-screen-xl mx-auto px-4 mt-8 mb-8 flex flex-row justify-center">
      <a className="flex flex-row items-center text-center text-gray-500 hover:text-black" href="https://github.com/hueyy/AskTogether">
        source code on&nbsp;&nbsp;
        <IoLogoGithub />
      </a>
    </footer>
  )
}

export default Footer