import Image from '../assets/pic.png';

const firstName = 'Zinal';
const jobTitle = 'project manager';
const jobLocation = 'Dallas, TX';
const careerObjective = 'I\'m a Project Manager with a technical background in Software Engineering and Business Analytics, focused on building efficient, scalable systems that bring clarity to complex work. I\'ve led end-to-end delivery for high-volume, high-stakes projects, partnering closely with engineers, product teams, and external vendors to keep initiatives on track, on time, and aligned with business goals.'
const experience = 'My experience includes supporting Agile software delivery at Capital One, managing enterprise-level workflows, and implementing project tracking systems that reduce friction and improve visibility. I\'m currently specializing in ServiceNow implementations, with hands-on experience in ITSM, IRM, and Flow Designer, and I bring a strong technical literacy in Python, SQL, JavaScript, and systems documentation. I thrive at the intersection of strategy and execution - translating technical details into actionable plans.';
const goals = 'With a foundation in Cognitive Science and Human-Computer Interaction and an MBA in progress, I approach technology with a user-first, data-informed mindset. I\'m driven by a desire to build tools and processes that not only function well, but genuiely improve how people work.';
const freeTime = 'When I\'m not working, you\'ll usually find me baking or cooking something new, playing pickleball, or spending time with friends and family.';

const About = () => {
  return (
    <main className="about-container min-h-screen md:px-12 lg:px-16 mx-auto">
      <h1 className="title text-4xl font-bold mb-12 font-roca text-center mt-36">About</h1>
      <br />
      <section className='about-content-container'>
        <section className='image-container'>
          <img className='grad-pic' src={Image} alt="graduation picture" />
        </section>
        <section className='description-container font-decalotype tracking-wide pb-7'>
          <h2 className='text-xl font-medium font-decalotype tracking-wide'>Hi there! I'm {firstName}, a {jobTitle} from {jobLocation}.</h2>
          <p>{careerObjective}</p>
          <p>{experience}</p>
          <p>{goals}</p>
          <p>{freeTime}</p>
        </section>
      </section>
    </main>
  )
}
 export default About;