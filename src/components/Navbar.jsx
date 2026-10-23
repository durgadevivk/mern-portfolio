const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
     { name: "Certifications", href: "#certification" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/10 ">

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide text-teal-400 hover:text-teal-300 transition-colors duration-300"
        >
          Durgadevi VK <span className="text-slate-100">.</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>

      </div>

    </nav>
  )
}

export default Navbar;
