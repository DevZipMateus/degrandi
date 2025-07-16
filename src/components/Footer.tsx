
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/c2cc8633-a51b-4fe0-b8d0-338ec56dd30b.png" 
              alt="Escritório Contábil De Grandi" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Escritório de contabilidade em Gaurama/RS oferecendo serviços contábeis completos 
              com excelência e tradição no mercado há mais de 20 anos.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>(54) 3391-1010</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>escritoriodegrandi@gmail.com</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Rua João Amândio Sperb, 229<br />Sala 106, Centro, Gaurama - RS</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="h-4 w-4" />
                <div>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Escritório Contábil De Grandi Ltda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
