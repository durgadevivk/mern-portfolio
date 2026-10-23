
const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0B1120] px-6 py-24 sm:py-28"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400 mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Contact <span className="text-teal-400">Me</span>
          </h2>

          <div className="w-16 h-1 bg-teal-400 rounded-full mx-auto mb-6" />

          <p className="text-slate-400 text-base md:text-lg">
            I'm open to opportunities and would love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-[#111C30] border border-slate-700 rounded-2xl p-6 sm:p-8">

            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Connect
            </h3>

            <p className="text-slate-300 leading-7 mb-8">
              If you are looking for a MERN Full Stack Developer or
              would like to discuss an opportunity, feel free to
              reach out to me.
            </p>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-slate-400 mb-1">
                  Email
                </p>
                <a
                  href="mailto:vkdurgadevikrishnan@gmail.com"
                  className="text-teal-300 break-words hover:text-teal-200 transition-colors"
                >
                  vkdurgadevikrishnan@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-1">
                  GitHub
                </p>
                <a
                  href="https://github.com/durgadevivk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 transition-colors"
                >
                  GitHub ↗
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/durgadevi-vadakalur-krishnan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-[#111C30] border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-5"
          >

            <div>
              <label className="block mb-2 text-slate-200 font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-[#0B1120] text-white placeholder-slate-500 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-200 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-[#0B1120] text-white placeholder-slate-500 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-slate-200 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-[#0B1120] text-white placeholder-slate-500 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-teal-400 text-slate-950 font-semibold hover:bg-teal-300 transition-colors duration-300"
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
