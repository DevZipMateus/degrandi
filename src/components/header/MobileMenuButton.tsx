
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrolled: boolean;
}

const MobileMenuButton = ({ isMenuOpen, toggleMenu, scrolled }: MobileMenuButtonProps) => {
  return (
    <button 
      onClick={toggleMenu} 
      className={cn(
        "md:hidden flex items-center justify-center rounded-full z-50",
        "focus:outline-none transition-all duration-200",
        "hover:scale-105 active:scale-95",
        "p-2 sm:p-3",
        scrolled 
          ? "bg-primary/10 text-primary hover:bg-primary/20"
          : "bg-white/20 backdrop-blur-sm text-primary hover:bg-white/30"
      )}
      aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      {isMenuOpen ? (
        <X className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
      ) : (
        <Menu className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
      )}
    </button>
  );
};

export default MobileMenuButton;
