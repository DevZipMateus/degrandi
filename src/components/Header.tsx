
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'py-4 bg-white/90'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="z-10 relative">
          <img 
            alt="Escritório Contábil De Grandi" 
            className="h-12 md:h-14" 
            src="/lovable-uploads/c2cc8633-a51b-4fe0-b8d0-338ec56dd30b.png" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-sm font-medium transition-colors hover:text-primary text-gray-700">
            Início
          </a>
          <a href="#sobre" className="text-sm font-medium transition-colors hover:text-primary text-gray-700">
            Sobre
          </a>
          <a href="#servicos" className="text-sm font-medium transition-colors hover:text-primary text-gray-700">
            Serviços
          </a>
          <a href="#depoimentos" className="text-sm font-medium transition-colors hover:text-primary text-gray-700">
            Depoimentos
          </a>
          <a href="#localizacao" className="text-sm font-medium transition-colors hover:text-primary text-gray-700">
            Localização
          </a>
          <a href="#contato" className="btn-primary text-sm">
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          aria-expanded="false"
        >
          <span className="sr-only">Abrir menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-y-0 shadow-lg' : '-translate-y-full'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
          <a href="#inicio" onClick={handleNavClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary">
            Início
          </a>
          <a href="#sobre" onClick={handleNavClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary">
            Sobre
          </a>
          <a href="#servicos" onClick={handleNavClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary">
            Serviços
          </a>
          <a href="#depoimentos" onClick={handleNavClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary">
            Depoimentos
          </a>
          <a href="#localizacao" onClick={handleNavClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary">
            Localização
          </a>
          <a href="#contato" onClick={handleNavClick} className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90 text-center mt-4 rounded">
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
