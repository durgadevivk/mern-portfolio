
const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B1120] px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            About <span className="text-teal-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-teal-400" />
        </div>

        {/* About card */}
        <div className="rounded-2xl border border-slate-700/70 bg-[#111C30] p-6 shadow-xl shadow-black/10 sm:p-10 md:p-12">

          <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg">

            <p>
              I am a <span className="font-semibold text-teal-300">MERN Full Stack Developer</span>{" "}
              passionate about building responsive, user-friendly, and
              scalable web applications. I work with MongoDB, Express.js,
              React.js, and Node.js to develop full-stack applications.
            </p>

            <p>
              I enjoy creating REST APIs, developing interactive React
              interfaces, managing application state, and connecting
              frontend applications with backend services and databases.
              I focus on writing clean, maintainable code and creating
              useful user experiences.
            </p>

            <p>
              I also bring previous professional experience in{" "}
              <span className="font-semibold text-teal-300">Java development</span>,
              which has helped me build a strong foundation in backend
              development, API design, and software engineering.
            </p>

          </div>

          {/* Core strengths */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

            <div className="rounded-xl border border-slate-700 bg-[#0B1120] p-5 transition duration-300 hover:border-teal-400/60">
              <h3 className="mb-2 font-semibold text-teal-300">
                Full Stack
              </h3>
              <p className="text-sm leading-6 text-slate-400">
                Frontend and backend application development
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-[#0B1120] p-5 transition duration-300 hover:border-teal-400/60">
              <h3 className="mb-2 font-semibold text-teal-300">
                REST APIs
              </h3>
              <p className="text-sm leading-6 text-slate-400">
                API development and frontend integration
              </p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-[#0B1120] p-5 transition duration-300 hover:border-teal-400/60">
              <h3 className="mb-2 font-semibold text-teal-300">
                Problem Solving
              </h3>
              <p className="text-sm leading-6 text-slate-400">
                Maintainable code and practical solutions
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
