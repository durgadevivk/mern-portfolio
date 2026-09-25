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
    <section id="projects" className="px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Projects
        </h2>

        <p className="text-center text-lg mb-12">
          Some of the applications I have built while developing my
          full-stack development skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition flex flex-col"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">

                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1 bg-gray-100 rounded-md text-sm"
                  >
                    {technology}
                  </span>
                ))}

              </div>

              <div className="flex gap-4 mt-auto">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-white transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
                >
                  Live Demo
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

