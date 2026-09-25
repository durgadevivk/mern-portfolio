const Experience = () => {
  return (
    <section id="experience" className="px-6 py-20">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Experience
        </h2>

        <p className="text-center text-lg mb-12">
          My professional experience and technical journey.
        </p>

        <div className="space-y-8">

          {/* Java Development Experience */}
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">

            <div className="flex flex-col md:flex-row md:justify-between mb-4">

              <div>
                <h3 className="text-2xl font-semibold">
                 Team Lead
                </h3>

                <p className="text-lg mt-1">
                  AGS Health Pvt. Ltd.
                </p>
              </div>

              <p className="text-gray-600 mt-2 md:mt-0">
                2015 – 2018
              </p>

            </div>

            <ul className="list-disc list-inside space-y-2 text-gray-600 leading-7">

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
          <div className="border border-gray-200 rounded-xl p-6 shadow-sm">

            <div className="flex flex-col md:flex-row md:justify-between mb-4">

              <div>
                <h3 className="text-2xl font-semibold">
                  Software / Operations Experience
                </h3>

                <p className="text-lg mt-1">
                  Educom Services
                </p>
              </div>

              <p className="text-gray-600 mt-2 md:mt-0">
                1.2 Years
              </p>

            </div>

            <p className="text-gray-600 leading-7">
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


