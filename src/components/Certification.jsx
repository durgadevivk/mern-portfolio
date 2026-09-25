const Certification = () => {
  const certifications = [
    {
      title: "MERN Full Stack Development",
      organization: "HCL GUVI",
      description:
        "Completed a full-stack development program covering MongoDB, Express.js, React.js, Node.js, JavaScript, REST APIs and application development.",
      year: "2026",
      certificateLink: "https://media.licdn.com/dms/image/v2/D5622AQE_xGCSkm9_aQ/feedshare-image-high-res/B56aCFw1CCG0AY-/0/1788950565387?e=1792022400&v=beta&t=30cZYlThoB5PRIK-eoHVOmuBmrWwTsB5AH9HQvPXIp0"
    }
  ]

  return (
    <section id="certification" className="px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Certifications
        </h2>

        <p className="text-center text-lg mb-12">
          Certifications that support my full-stack development journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
            >

              <h3 className="text-2xl font-semibold mb-3">
                {certificate.title}
              </h3>

              <p className="text-lg font-medium mb-2">
                {certificate.organization}
              </p>

              <p className="text-gray-600 leading-7 mb-4">
                {certificate.description}
              </p>

              <p className="text-gray-500 mb-5">
                {certificate.year}
              </p>

              <a
                href={certificate.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
              >
                View Certificate
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Certification

