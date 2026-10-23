
const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1120] px-6 py-24"
    >
      {/* Background decorative glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Intro label */}
        <p className="mb-4 text-lg font-medium tracking-wide text-teal-400">
          Hi, I'm
        </p>

        {/* Name */}
        <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
          Durgadevi <span className="text-teal-400">V K</span>
        </h1>

        {/* Role */}
        <h2 className="mb-6 text-xl font-semibold leading-relaxed text-slate-300 sm:text-2xl md:text-3xl">
          MERN Full Stack Developer
          <span className="text-teal-400"> | </span>
          React Developer
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          I build responsive and user-friendly web applications
          using React.js, JavaScript, Node.js, Express.js, and MongoDB.
          I enjoy turning ideas into practical web experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#projects"
            className="rounded-lg bg-teal-400 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-teal-500/20 transition duration-300 hover:-translate-y-1 hover:bg-teal-300 hover:shadow-teal-400/30"
          >
            View Projects <span aria-hidden="true">↗</span>
          </a>

          <a
            href="/Durgadevi_VK_MERN_Full_Stack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-teal-400/60 px-7 py-3.5 font-semibold text-teal-300 transition duration-300 hover:-translate-y-1 hover:bg-teal-400 hover:text-slate-950"
          >
            Download Resume <span aria-hidden="true">↓</span>
          </a>

        </div>

        {/* Technology badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-teal-400/60 hover:text-teal-300"
              >
                {tech}
              </span>
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;
