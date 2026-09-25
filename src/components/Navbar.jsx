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
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo / Name */}
        <a
          href="#home"
          className="text-xl font-bold"
        >
          Durgadevi VK
        </a>

        {/* Navigation Links */}
        <div className="flex gap-6">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-500 transition"
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
