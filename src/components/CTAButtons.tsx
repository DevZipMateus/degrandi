
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { Building2, Briefcase } from 'lucide-react';

const CTAButtons = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/abertura-de-empresa" 
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-center">
                  Abrir Empresa
                </h2>
              </div>
              <p className="text-white/90 text-center text-lg">
                Precisa abrir uma nova empresa? Nossa equipe te ajuda em todo o processo de abertura.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/trazer-sua-empresa" 
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-center">
                  Já Tenho uma Empresa
                </h2>
              </div>
              <p className="text-white/90 text-center text-lg">
                Já possui empresa e precisa de serviços contábeis? Fale conosco para uma consultoria.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTAButtons;
