import Image from '../assets/pic.png';

const firstName = 'Zinal';
const jobTitle = 'project manager';
const jobLocation = 'Dallas, TX';
const careerObjective = 'I\'m a Project Manager with a technical background in Software Engineering and Business Analytics. I focus on bringing structure, clarity, nad momentum to complex work by aligning people, processes, and technology.'
const experience = 'My experience includes leading end-to-end delivery for high-volume, high-stakes initiatives, supporting Agile software delivery in enterprise environments, and partnering closely with engineers, product teams, and external vendors. I\'ve designed and implemented project tracking systems to improve visibility, manage dependencies, and reduce operational friction.';
const goals = 'I\'m currently specializing in ServiceNow platform implementations, with hands-on experience in ITSM, IRM, and Flow Designer. My technical literacy in Python, SQL, JavaScript, and systems documentation allows me to collaborate effectively with technical teams while keeping delivery goals, timelines, and business outcomes front and center.';
const background = 'With a foundation in Cognitive Science and Human-Computer Interaction, and an MBA in progress with a concentration in Business Analytics, I approach project management with a user-first, data-informed mindset. I\'m driven by a desire to build processes and tools that don\'t just function well, but genuinely improve how people work.'
const freeTime = 'Outside of work, you\'ll usually find me baking or cooking something new, playing pickleball, or spending time with friends and family.';

const About = () => {
  return (
    <main className="about-container min-h-screen md:px-12 lg:px-16 mx-auto">
      <h1 className="title text-4xl font-bold mb-12 font-roca text-center mt-36">About</h1>
      <br />
      <section className='about-content-container'>
        <section className='image-container'>
          <img className='pic' src={Image} alt="picture" />
        </section>
        <section className='description-container font-decalotype tracking-wide pb-7'>
          <h2 className='text-xl font-medium font-decalotype tracking-wide'>Hi there! I'm {firstName}, a {jobTitle} based in {jobLocation}.</h2>
          <p>{careerObjective}</p>
          <p>{experience}</p>
          <p>{goals}</p>
          <p>{background}</p>
          <p>{freeTime}</p>
        </section>
      </section>
    </main>
  )
}
 export default About;