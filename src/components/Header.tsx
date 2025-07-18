
import { useState, useEffect } from 'react';
import Logo from './header/Logo';
import DesktopNavigation from './header/DesktopNavigation';
import MobileMenuButton from './header/MobileMenuButton';
import MobileMenuPanel from './header/MobileMenuPanel';
import MobileMenuOverlay from './header/MobileMenuOverlay';
import { MenuItem } from './header/types';

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

  const menuItems: MenuItem[] = [
    { name: 'Início', href: '/#inicio' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Depoimentos', href: '/#depoimentos' },
    { name: 'Localização', href: '/#localizacao' },
    { name: 'Contato', href: '/#contato' }
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-1 sm:py-1.5' 
          : 'py-1.5 sm:py-2 md:py-2.5 bg-white/90'
      }`}>
        <div className="section-container flex justify-between items-center">
          <Logo />
          <DesktopNavigation menuItems={menuItems} scrolled={scrolled} />
          <MobileMenuButton 
            isMenuOpen={isMenuOpen} 
            toggleMenu={handleMenuToggle} 
            scrolled={scrolled} 
          />
        </div>
      </header>

      <MobileMenuOverlay isMenuOpen={isMenuOpen} onClose={handleMenuClose} />
      <MobileMenuPanel 
        isMenuOpen={isMenuOpen} 
        onClose={handleMenuClose} 
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;
