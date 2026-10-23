
const Projects = () => {
  const projects = [
    {
      title: "Restaurant Reservation & Review Platform",
      description:
        "A full-stack restaurant platform where users can search restaurants, check availability, make reservations, manage bookings and submit reviews.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Tailwind CSS"
      ],
      github: "https://github.com/durgadevivk/Restaurant_Reservation",
      live: "https://fe-restaurant.netlify.app/"
    },
    {
      title: "Movie Review App",
      description:
        "A React-based movie review application where users can explore movies, view details and interact with movie reviews through a responsive interface.",
      technologies: [
        "React.js",
        "JavaScript",
        "Axios",
        "React Router",
        "Tailwind CSS"
      ],
      github: "https://github.com/durgadevivk/movie-review-app",
      live: "https://brilliant-bavarois-d89e93.netlify.app/"
    },
    {
      title: "Kanban Task Management Board",
      description:
        "A responsive task management application that allows users to create, organize and move tasks between different workflow stages.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Context API",
        "LocalStorage"
      ],
      github: "https://github.com/durgadevivk/kanban-board",
      live: "https://majestic-florentine-740f52.netlify.app/"
    }
  ]

  return (
    <section id="projects" className="bg-[#0B1120] px-6 py-24 sm:py-28">

      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400 mb-3">
            My Recent Work
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            My <span className="text-teal-400">Projects</span>
          </h2>

          <div className="w-16 h-1 bg-teal-400 rounded-full mx-auto mb-6" />

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-8">
            Some of the applications I have built while developing my
            full-stack development skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#111C30] border border-slate-700 rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/70 hover:shadow-xl hover:shadow-teal-950/40"
            >

              {/* Project Accent */}
              <div className="w-12 h-1 bg-teal-400 rounded-full mb-6 transition-all duration-300 group-hover:w-20" />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-7 mb-6">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-8">

                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 bg-[#0B1120] border border-slate-700 rounded-lg text-teal-300 text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}

              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-3 mt-auto">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-teal-400/70 text-teal-300 font-semibold hover:bg-teal-400/10 hover:border-teal-300 transition-colors duration-300"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-teal-400 text-slate-950 font-semibold hover:bg-teal-300 transition-colors duration-300"
                >
                  Live Demo ↗
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects
