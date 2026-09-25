const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "React Router",
        "Redux Toolkit",
        "Tailwind CSS"
      ]
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "JWT"
      ]
    },
    {
      category: "Database",
      technologies: [
        "MongoDB",
        "Mongoose",
        "Mysql"
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Axios"
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen px-6 py-20">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Skills
        </h2>

        <p className="text-center text-lg mb-12">
          Technologies and tools I use to build full-stack web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.category}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >

              <h3 className="text-2xl font-semibold mb-5">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills

