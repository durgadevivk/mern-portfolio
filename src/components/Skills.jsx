
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
        "Tailwind CSS",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "JWT",
      ],
    },
    {
      category: "Database",
      technologies: [
        "MongoDB",
        "Mongoose",
        "MySQL",
      ],
    },
    {
      category: "Tools & Others",
      technologies: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Axios",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0B1120] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
            My technical toolkit
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            My <span className="text-teal-400">Skills</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-teal-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Technologies and tools I use to build responsive,
            user-friendly full-stack web applications.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid gap-6 sm:grid-cols-2">

          {skills.map((skill) => (
            <div
              key={skill.category}
              className="group rounded-2xl border border-slate-700/70 bg-[#111C30] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-xl hover:shadow-teal-950/30 sm:p-8"
            >

              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {skill.category}
                </h3>
              </div>

              <div className="mb-6 h-px bg-slate-700 transition-colors duration-300 group-hover:bg-teal-400/40" />

              <div className="flex flex-wrap gap-3">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-slate-700 bg-[#0B1120] px-3 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:border-teal-400/60 hover:bg-teal-400/10 hover:text-teal-300"
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
  );
};

export default Skills;
