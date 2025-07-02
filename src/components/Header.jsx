import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "What we do", href: "#what-we-do" },
    { label: "Our work", href: "#our-work" },
    { label: "Who we are", href: "#about" },
    { label: "News & Insights", href: "#news-insights" },
  ];

  return (
    <header className="bg-white w-full fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-black">
            <span className="font-anton">Sketch</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-black font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-gray-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Get in Touch Button */}
          <div className="hidden md:block">
            <button className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-full text-sm font-medium">
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <nav className="flex flex-col space-y-3 text-black font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="mt-4 bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-full text-sm font-medium w-fit">
              Get in touch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
