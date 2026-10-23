
const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-[#0B1120] px-6 py-24 sm:py-28"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400 mb-3">
            My Career Journey
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Experience
          </h2>

          <div className="w-16 h-1 bg-teal-400 rounded-full mx-auto mb-6" />

          <p className="text-slate-400 text-base md:text-lg">
            My professional experience and technical journey.
          </p>
        </div>

        <div className="space-y-8">

          {/* Java Development Experience */}
          <div className="relative bg-[#111C30] border border-slate-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-teal-400/70 hover:shadow-xl hover:shadow-teal-950/30">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-6">

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Team Lead
                </h3>

                <p className="text-lg text-teal-400 font-medium mt-2">
                  AGS Health Pvt. Ltd.
                </p>
              </div>

              <span className="inline-flex w-fit px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-300 text-sm font-medium">
                2015 – 2018
              </span>

            </div>

            <ul className="list-disc list-inside space-y-3 text-slate-300 leading-7 marker:text-teal-400">

              <li>
                Worked on a healthcare RCM application for denial and
                timesheet management.
              </li>

              <li>
                Developed backend functionality using Java and
                Spring Boot REST APIs.
              </li>

              <li>
                Worked with MySQL, Spring Data JPA and Hibernate
                for database operations.
              </li>

              <li>
                Implemented authentication and role-based access
                control using Spring Security and JWT.
              </li>

              <li>
                Worked with different user roles including
                Admin, Manager and Employee.
              </li>

              <li>
                Developed functionality for time submission,
                manager approval and reporting.
              </li>

            </ul>

          </div>

          {/* Additional Experience */}
          <div className="relative bg-[#111C30] border border-slate-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-teal-400/70 hover:shadow-xl hover:shadow-teal-950/30">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-6">

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Software / Operations Experience
                </h3>

                <p className="text-lg text-teal-400 font-medium mt-2">
                  Educom Services
                </p>
              </div>

              <span className="inline-flex w-fit px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/30 text-teal-300 text-sm font-medium">
                1.2 Years
              </span>

            </div>

            <p className="text-slate-300 leading-7">
              Gained professional experience in a structured
              work environment and developed strong skills in
              communication, teamwork and problem solving.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience
