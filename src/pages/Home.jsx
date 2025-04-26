import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import TypewriterEffect from '../components/Typewriter';

const fullName = 'Zinal Desai';
const personalQuote = '"Whether you think you can or think you can\'t, either way you\'re right." - Henry Ford';
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const Home = () => {
  return (
    <main className="home-container min-h-screen flex flex-col justify-between">
      <section className="home-subsection flex-1 flex flex-col items-center text-center px-4">
        <h2 className="text-6xl md:text-7xl font-roca mb-4">{fullName}</h2>
        <TypewriterEffect/>
        <div className="flex gap-10 mt-6 ">
        <a onClick={() => openInNewTab("https://www.linkedin.com/in/zinaldesai/")}>
        <FaLinkedinIn size={35}/>
        </a>
        <a onClick={() => openInNewTab("https://github.com/zinaldesai")}>
        <FaGithub size={35}/>
        </a>
        <a href="mailto:desaizinal15@gmail.com">
        <IoIosMail size={35} />
        </a>
        </div>
      </section>
      <footer className="text-center">
      <p className="text-xl tracking-wide italic font-decalotype">{personalQuote}</p>
      </footer>
    </main>
  )
}

export default Home;