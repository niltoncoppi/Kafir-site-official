import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Icon } from './Icon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Initial path set
    setCurrentPath(window.location.pathname + window.location.hash);

    // Listener for routing changes (custom event or popstate)
    const handlePathChange = () => {
        setCurrentPath(window.location.pathname + window.location.hash);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePathChange);
    // Listen for custom pushState events if we were dispatching them, 
    // but in App.tsx we will use standard pushState and rely on App re-rendering logic.
    // However, Header might be outside the re-render scope if App doesn't pass props.
    // We'll rely on a simple interval or click listener fallback if needed, 
    // but effectively the link click in App.tsx will trigger re-renders of the App tree.
    
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  // Helper to determine if a link is active
  const isActive = (href: string) => {
    if (href === '/' && (currentPath === '/' || currentPath === '')) return true;
    if (href.startsWith('/#')) return currentPath === href;
    return currentPath.startsWith(href) && href !== '/';
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm shadow-sm py-4 lg:bg-transparent lg:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="bg-emerald-600 text-white p-1.5 rounded-lg group-hover:bg-emerald-700 transition-colors">
            <Icon name="ShieldAlert" size={24} />
          </div>
          <span className={`text-2xl font-bold tracking-tight text-emerald-900`}>
            Kafir
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${
                isActive(link.href) ? 'text-emerald-600 font-bold' : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full ${isActive(link.href) ? 'w-full' : ''}`}></span>
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <a 
            href="/#contato"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Solicitar Cotação
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <Icon name={isOpen ? 'X' : 'Menu'} size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 flex flex-col items-center gap-4 animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-gray-800 font-medium text-lg py-2 w-full text-center hover:bg-emerald-50 hover:text-emerald-600 ${isActive(link.href) ? 'text-emerald-600 bg-emerald-50' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="/#contato"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-emerald-600 text-white px-8 py-3 rounded-full font-bold shadow-md"
          >
            Solicitar Cotação
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;