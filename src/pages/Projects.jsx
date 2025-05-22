import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Project 4',
    description: 'Description of project 4',
    repositoryLink: 'Link to the GitHub repository',
  },
  {
    title: 'Project 5',
    description: 'Description of project 5',
    repositoryLink: 'Link to the GitHub repository',
  },
];
// const Projects = () => {
//   return (
//     <main className="projects-container">
//       <h1 className="title text-5xl font-bold mb-6 font-roca text-center mt-36">projects</h1>
//       <div>
//       {myProjects.map((project) => (
//         <section key={project.title} className="project-item border border-2 rounded-lg">
//           <section className="project-image-container">
//             <FaGithub />
//           </section>
//           <h2 className="text-xl font-semibold">{project.title}</h2>
//           <p className="text-lg">{project.description}</p>
//           <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>
//         </section>
//       ))}
//       </div>
//     </main>
//   )
// }

const Projects = () => {
  return (
    <main className="projects-container py-16 px-4 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <h1 className="title text-5xl font-bold font-roca text-center mt-36">projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <section
            key={project.title}
            className="project-item group relative border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="project-image-container relative w-full h-48 bg-gray-200 group-hover:bg-gray-300 transition-all duration-300">
              <FaGithub className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-lg mt-2">{project.description}</p>
              <p className="mt-4">
                Check out the project repository{' '}
                <a
                  href={project.repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  here
                </a>
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Projects