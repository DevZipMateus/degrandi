
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanCardProps {
  title: string;
  description: string;
  features: string[];
  className?: string;
}

const PlanCard = ({ 
  title, 
  description, 
  features, 
  className 
}: PlanCardProps) => {
  const phoneNumber = "5433911010";
  const message = `Olá! Gostaria de solicitar um orçamento para o plano ${title}.`;
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={cn(
      "glass-card rounded-xl overflow-hidden transition-all duration-300 border-gray-100 h-full",
      className
    )}>
      <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">{description}</p>
        
        <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 flex-grow">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 sm:gap-3">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary" />
              </div>
              <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={handleWhatsAppClick}
          className="mt-6 sm:mt-8 w-full block text-center py-2.5 sm:py-3 rounded-md font-medium transition-colors bg-primary text-white hover:bg-primary/90 text-sm sm:text-base"
        >
          Solicitar Orçamento
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
