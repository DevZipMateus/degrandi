
import { ChevronRight, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';

const ServicesButton = () => {
  return (
    <section className="spacing-section">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />
            </div>
            <h2 className="section-title mb-3 sm:mb-4">Nossos Serviços</h2>
            <p className="section-subtitle mb-6 sm:mb-8">
              Descubra todas as soluções contábeis que oferecemos para o seu negócio
            </p>
            <Link to="/servicos" className="btn-primary inline-flex items-center gap-2">
              Conheça Nossos Serviços
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesButton;
