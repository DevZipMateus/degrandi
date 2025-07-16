
import { ChevronRight, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';

const ServicesButton = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Briefcase className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            </div>
            <h2 className="section-title mb-4">Nossos Serviços</h2>
            <p className="section-subtitle mb-8">
              Descubra todas as soluções contábeis que oferecemos para o seu negócio
            </p>
            <Link to="/servicos" className="btn-primary inline-flex items-center gap-2">
              Conheça Nossos Serviços
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesButton;
