const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-lg mb-12">
          I'm open to opportunities and would love to connect.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-600 leading-7 mb-6">
              If you are looking for a MERN Full Stack Developer or
              would like to discuss an opportunity, feel free to
              reach out to me.
            </p>

            <div className="space-y-4">

              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:vkdurgadevikrishnan@gmail.com"
                  className="hover:underline"
                >
                  vkdurgadevikrishnan@gmail.com
                </a>
              </p>

              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href="https://github.com/durgadevivk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  GitHub
                </a>
              </p>

              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/durgadevi-vadakalur-krishnan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </p>

            </div>

          </div>


          {/* Contact Form */}
          <form className="space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact

