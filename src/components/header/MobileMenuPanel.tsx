
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { MenuItem } from "./types";

interface MobileMenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenuPanel = ({ isMenuOpen, onClose, menuItems }: MobileMenuPanelProps) => {
  const handleAnchorClick = (href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      if (window.location.pathname !== '/') {
        window.location.href = href;
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    }
    onClose();
  };

  return (
    <div 
      className={cn(
        'fixed top-0 right-0 bottom-0 z-40 w-full max-w-xs sm:max-w-sm lg:max-w-md bg-white shadow-xl',
        'transform transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between p-3 sm:p-4 lg:p-6 border-b">
        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">De Grandi</div>
        <button 
          onClick={onClose}
          className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          aria-label="Fechar menu"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="px-3 sm:px-4 lg:px-6 pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 lg:pb-8 overflow-y-auto h-[calc(100%-70px)] sm:h-[calc(100%-76px)] lg:h-[calc(100%-88px)]">
        <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                <Link
                  to={item.href}
                  className={cn(
                    "text-base sm:text-lg lg:text-xl font-medium text-gray-800 hover:text-primary transition-all duration-200 block py-2 sm:py-2.5",
                    "hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-primary rounded-md px-2 sm:px-3",
                    item.name === 'Contato' && 'bg-primary text-white hover:bg-primary/90 hover:text-white'
                  )}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={cn(
                    "text-base sm:text-lg lg:text-xl font-medium text-gray-800 hover:text-primary transition-all duration-200 block py-2 sm:py-2.5",
                    "hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-primary rounded-md px-2 sm:px-3",
                    item.name === 'Contato' && 'bg-primary text-white hover:bg-primary/90 hover:text-white'
                  )}
                  onClick={(e) => {
                    if (item.href.startsWith('/#')) {
                      e.preventDefault();
                      handleAnchorClick(item.href);
                    } else {
                      onClose();
                    }
                  }}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-100">
          <p className="text-xs sm:text-sm lg:text-base text-gray-500 mb-2 sm:mb-3 px-2 sm:px-3">Entre em contato conosco</p>
          <a 
            href="tel:+5454339110110" 
            className="text-base sm:text-lg lg:text-xl text-primary hover:text-primary/80 font-medium block py-2 sm:py-2.5 px-2 sm:px-3
                       transition-all duration-200 hover:translate-x-1 hover:scale-[1.02] rounded-md"
          >
            (54) 3391-1010
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenuPanel;
