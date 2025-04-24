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
    <main className="home-container">
      <section className="home-hero home-subsection flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-6xl mb-2 font-roca flex justify-center">{fullName}</h2>
        <TypewriterEffect/>
        <div className="flex links">
        <a onClick={() => openInNewTab("https://www.linkedin.com/in/zinaldesai/")}>
        <FaLinkedinIn size={30}/>
        </a>
        <a onClick={() => openInNewTab("https://github.com/zinaldesai")}>
        <FaGithub size={30}/>
        </a>
        <a href="mailto:desaizinal15@gmail.com">
        <IoIosMail size={30}/>
        </a>
        <p className="flex subsection-paragraph justify-center">{personalQuote}</p>
        </div>
        
      </section>
    </main>
  )
}

export default Home;