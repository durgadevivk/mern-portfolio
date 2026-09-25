const Hero=()=>{
    return(
        <>
        <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 mb-0"
    >
      <div className="max-w-4xl text-center ">

        <p className="text-lg mb-4">
          Hi, I'm
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Durgadevi V K
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          MERN Full Stack Developer & React Developer
        </h2>

        <p className="text-lg leading-8 max-w-2xl mx-auto mb-8">
          I build responsive and user-friendly web applications
          using React.js, JavaScript, Node.js, Express.js and MongoDB.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-black text-white hover:opacity-80"
          >
            View Projects
          </a>

          <a
            href="/Durgadevi_VK_MERN_Full_Stack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-black hover:bg-black hover:text-white"
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
        </>
    )
}
export default Hero;