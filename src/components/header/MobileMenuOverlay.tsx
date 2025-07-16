
import { cn } from "@/lib/utils";

interface MobileMenuOverlayProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const MobileMenuOverlay = ({ isMenuOpen, onClose }: MobileMenuOverlayProps) => {
  return (
    <div 
      className={cn(
        'fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300',
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      onClick={onClose}
    />
  );
};

export default MobileMenuOverlay;
