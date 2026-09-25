const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg leading-8 mb-6">
            I am a MERN Full Stack Developer passionate about building
            responsive, user-friendly and scalable web applications.
            I work with MongoDB, Express.js, React.js and Node.js to
            develop complete full-stack applications.
          </p>

          <p className="text-lg leading-8 mb-6">
            I enjoy creating REST APIs, developing interactive React
            interfaces, managing application state and connecting
            frontend applications with backend services and databases.
          </p>

          <p className="text-lg leading-8">
            I also have previous professional experience in Java
            development, which has helped me build a strong foundation
            in backend development and software engineering.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About

