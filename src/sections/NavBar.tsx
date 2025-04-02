import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavLinkProps {
  href?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className='relative transition-all text-gray-900 dark:text-white 
      after:content-[""] after:absolute after:left-0 after:-bottom-1 
      after:h-0.5 after:w-0 after:bg-current 
      after:transition-all after:duration-500 hover:after:w-full'
  >
    {children}
  </a>
);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or system preference
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const openWhatsApp = () => {
    window.open('https://wa.me/94754057355', '_blank', 'noopener,noreferrer');
  };

  const navLinks1 = [
    { href: "#home", label: "Home" },
    { href: "#kolvio", label: "Kolvio" },
  ];
  const navLinks2 = [
    { href: "#contact", label: "Contact Me", onclick: openWhatsApp },
    { href: "#cv", label: "My CV" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  };
  
  useEffect(() => {
    // Apply the initial theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="w-[95%] md:w-[90%] mx-auto p-2 pt-4 flex justify-between md:justify-center items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navLinks1.map(({ href, label }) => (
          <NavLink key={href} href={href}>{label}</NavLink>
        ))}
        <button 
          onClick={toggleDarkMode} 
          className="focus:outline-none text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
        >
          {isDarkMode ? <Moon className="w-6 h-6 cursor-pointer" /> : <Sun className="w-6 h-6 cursor-pointer" />}
        </button>
        {navLinks2.map(({ href, label, onclick }) => (
          <NavLink 
            key={href} 
            href={href}
            onClick={onclick ? (e) => { onclick(); } : undefined}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden btn btn-ghost text-xl text-gray-900 dark:text-white"
      >
        <Menu />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40" 
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] bg-white/10 dark:bg-gray-900/90 backdrop-blur-lg z-50
          transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-between mb-8">
            <button 
              onClick={toggleDarkMode} 
              className="focus:outline-none text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            >
              {isDarkMode ? <Moon className="w-6 h-6 cursor-pointer" /> : <Sun className="w-6 h-6 cursor-pointer" />}
            </button>
            <button
              onClick={toggleMenu}
              className="btn btn-ghost text-xl text-gray-900 dark:text-white"
            >
              <X />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-6">
            {navLinks1.map(({ href, label }) => (
              <NavLink 
                key={href} 
                href={href}
                onClick={toggleMenu}
              >
                {label}
              </NavLink>
            ))}
            {navLinks2.map(({ href, label, onclick }) => (
              <NavLink 
                key={href} 
                href={href}
                onClick={(e) => {
                  toggleMenu();
                  if (onclick) onclick();
                }}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;