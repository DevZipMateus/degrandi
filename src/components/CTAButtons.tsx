
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { Building2, Briefcase } from 'lucide-react';

const CTAButtons = () => {
  return (
    <section className="spacing-section-sm bg-white">
      <div className="section-container">
        <AnimatedSection animation="fade-in-up" className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <Link 
              to="/abertura-de-empresa" 
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-left">
                  Abrir Empresa
                </h2>
              </div>
              <p className="text-white/90 text-center sm:text-left text-sm sm:text-base md:text-lg leading-relaxed">
                Precisa abrir uma nova empresa? Nossa equipe te ajuda em todo o processo de abertura.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/trazer-sua-empresa" 
              className="group relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-left">
                  Já Tenho uma Empresa
                </h2>
              </div>
              <p className="text-white/90 text-center sm:text-left text-sm sm:text-base md:text-lg leading-relaxed">
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
