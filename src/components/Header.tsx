
import { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '#experience', label: 'Experiência' },
    { href: '#projects', label: 'Projetos' },
    { href: '#skills', label: 'Competências' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/30' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - AI Theme com robô */}
          <div className="flex items-center space-x-3">
            <Bot className={`text-cyan-400 transition-all duration-300 ${
              isScrolled ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-8 h-8 sm:w-10 sm:h-10'
            }`} />
            <div className={`font-bold transition-all duration-300 ${
              isScrolled ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl sm:text-2xl md:text-3xl'
            }`}>
              <span 
                className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text"
                style={{ 
                  fontFamily: "'Orbitron', 'Monaco', 'Menlo', 'Consolas', monospace",
                  fontWeight: 700,
                  letterSpacing: '0.1em'
                }}
              >
                Alvaro Assunção
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 relative group text-sm lg:text-base"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/95 rounded-lg p-4 border border-gray-800">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
