import { useState } from 'react';
import { 
  Sun,
  Moon,
} from 'lucide-react';
import { Menu, X } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className='relative transition-all 
      after:content-[""] after:absolute after:left-0 after:-bottom-1 
      after:h-0.5 after:w-0 after:bg-current 
      after:transition-all after:duration-500 hover:after:w-full'
  >
    {children}
  </a>
);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks1 = [
    { href: "#home", label: "Home" },
    { href: "#kolvio", label: "Kolvio" },
  ];
  const navLinks2 = [
    { href: "#contact", label: "Contact Me" },
    { href: "#cv", label: "My CV" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-[95%] md:w-[90%] mx-auto p-2 pt-4 flex justify-between md:justify-center items-center">
      {/* Desktop Navigation */}
      <nav className='hidden md:flex space-x-6'>
        {navLinks1.map(({ href, label }) => (
          <NavLink key={href} href={href}>{label}</NavLink>
        ))}
        <Sun className="w-6 h-6 cursor-pointer" />
        {navLinks2.map(({ href, label }) => (
          <NavLink key={href} href={href}>{label}</NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden btn btn-ghost text-xl"
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
        className={`fixed top-0 right-0 h-full w-[85%] bg-white/10 backdrop-blur-lg z-50
          transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-between mb-8">
            <Sun className="w-6 h-6 cursor-pointer" />
            <button
              onClick={toggleMenu}
              className="btn btn-ghost text-xl"
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
            {navLinks2.map(({ href, label }) => (
              <NavLink 
                key={href} 
                href={href}
                onClick={toggleMenu}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavBar