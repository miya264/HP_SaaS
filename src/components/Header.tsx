import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BarChart2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  // Homeページ判定
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHome
          ? (isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5')
          : 'bg-white shadow-md py-3'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <BarChart2 
            className={`h-8 w-8 ${
              isHome
                ? (isScrolled ? 'text-primary-600' : 'text-white')
                : 'text-primary-600'
            }`} 
          />
          <span
            className={`text-xl font-bold ${
              isHome
                ? (isScrolled ? 'text-primary-950' : 'text-white')
                : 'text-primary-950'
            }`}
          >
            Insight<span className="text-secondary-500">Sync</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors duration-300 ${
                isHome
                  ? (isScrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white hover:text-secondary-300')
                  : 'text-gray-700 hover:text-primary-600'
              } ${location.pathname === link.path ? 'font-semibold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${
              isHome
                ? (isScrolled ? 'text-gray-800' : 'text-white')
                : 'text-gray-800'
            }`} />
          ) : (
            <Menu className={`h-6 w-6 ${
              isHome
                ? (isScrolled ? 'text-gray-800' : 'text-white')
                : 'text-gray-800'
            }`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg py-5 px-4 absolute top-full left-0 right-0 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-800 hover:text-primary-600 font-medium py-2 ${
                  location.pathname === link.path ? 'text-primary-600 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary mt-2"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;