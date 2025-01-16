import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      fixed top-0 w-full z-50 transition-all duration-500
      ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }
    `}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src="/logo.png" alt="Stack Meridian" className="h-10 w-auto" />

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#technologies">Technologies</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            {/* <button className="bg-[#00205B] text-white px-4 py-2 rounded hover:bg-[#003087] hover:scale-105 transition-all duration-300">
              Get Started
            </button> */}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`
          md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl shadow-lg
          transition-all duration-300 overflow-hidden
          ${isMenuOpen ? "max-h-64" : "max-h-0"}
        `}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#technologies">Technologies</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            {/* <button className="bg-[#00205B] text-white px-4 py-2 rounded hover:bg-[#003087] w-full">
              Get Started
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative text-gray-600 hover:text-[#00205B] transition-colors font-medium group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00205B] transition-all duration-300 group-hover:w-full" />
    </a>
  );
};
