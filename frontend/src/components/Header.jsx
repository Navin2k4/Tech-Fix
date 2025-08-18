import React from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-slate-900 text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold font-sans">
              Tech<span className="text-accent">Fix</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-accent transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About Us
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors font-medium">
              <a href="/login">

              Login Now
              </a>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-accent transition-colors">
                Home
              </a>
              <a
                href="#services"
                className="hover:text-accent transition-colors"
              >
                Services
              </a>
              <a href="#about" className="hover:text-accent transition-colors">
                About Us
              </a>
              <a
                href="#contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </a>
              <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors font-medium mt-4 w-fit">
                Request Help
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
