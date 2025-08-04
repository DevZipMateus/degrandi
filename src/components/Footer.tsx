
import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src="/lovable-uploads/c2cc8633-a51b-4fe0-b8d0-338ec56dd30b.png" 
              alt="Escritório Contábil De Grandi" 
              className="h-24 mb-3 sm:mb-4 brightness-0 invert" 
            />
            <p className="text-gray-300 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              Escritório de contabilidade oferecendo serviços contábeis completos 
              com excelência e tradição no mercado há mais de 40 anos.
            </p>
          </div>

          {/* Viadutos Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">VIADUTOS/RS</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm sm:text-base">
                  <p>Av. Independência - nº 377 - Centro</p>
                  <p>Viadutos/RS - CEP: 99820-000</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">(54) 3699-1514</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">(54) 99688-5591</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">GAURAMA/RS</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm sm:text-base">
                  <p>Rua João Amândio Sperb - nº 229 - Centro</p>
                  <p>Gaurama/RS - CEP: 99830-000</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">(54) 3391-1010</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">(54) 98424-7020</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Escritório Contábil De Grandi Ltda. Todos os direitos reservados. Desenvolvido por MonteSite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
