import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/home" },
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "About", href: "/about" },
    { label: "Founders", href: "#founders" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-sm border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-30 mr-2" src={logo} alt="Logo" />
            <Link to="/home" className="text-xl tracking-tight">CyberStream</Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.href.startsWith('/') ? (
                  <Link to={item.href}>{item.label}</Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetSection = document.getElementById(
                        item.href.substring(1)
                      );
                      if (targetSection) {
                        targetSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a> */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Contact us
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  {item.href.startsWith('/') ? (
                    <Link to={item.href} onClick={toggleNavbar}>{item.label}</Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetSection = document.getElementById(
                          item.href.substring(1)
                        );
                        if (targetSection) {
                          targetSection.scrollIntoView({ behavior: "smooth" });
                          toggleNavbar();
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            {/* <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Contact us
              </a>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;