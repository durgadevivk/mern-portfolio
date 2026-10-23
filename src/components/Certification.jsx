
const Certification = () => {
  const certifications = [
    {
      title: "MERN Full Stack Development",
      organization: "HCL GUVI",
      description:
        "Completed a full-stack development program covering MongoDB, Express.js, React.js, Node.js, JavaScript, REST APIs and application development.",
      year: "2026",
      certificateLink: "https://drive.google.com/file/d/1LsdBni-zvvqoBVBymPMX3EBKBvNlfqYr/view?usp=sharing"
    }
  ]

  return (
    <section
      id="certification"
      className="bg-[#0B1120] px-6 py-24 sm:py-28"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400 mb-3">
            Learning & Growth
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Certifications
          </h2>

          <div className="w-16 h-1 bg-teal-400 rounded-full mx-auto mb-6" />

          <p className="text-slate-400 text-base md:text-lg">
            Certifications that support my full-stack development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="group bg-[#111C30] border border-slate-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/70 hover:shadow-xl hover:shadow-teal-950/30"
            >

              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-400/10 border border-teal-400/30">
                  <span className="text-2xl text-teal-400">✦</span>
                </div>

                <span className="px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-300 text-sm font-medium">
                  {certificate.year}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                {certificate.title}
              </h3>

              <p className="text-lg font-semibold text-teal-400 mb-4">
                {certificate.organization}
              </p>

              <p className="text-slate-300 leading-7 mb-8">
                {certificate.description}
              </p>

              <a
                href={certificate.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-teal-400 text-slate-950 font-semibold hover:bg-teal-300 transition-colors duration-300"
              >
                View Certificate
                <span aria-hidden="true">↗</span>
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Certification
