
import AnimatedSection from './AnimatedSection';
import { ChevronRight, Calculator, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20" 
      style={{
        background: 'linear-gradient(135deg, hsl(220, 75%, 55%) 0%, hsl(220, 85%, 60%) 20%, hsl(220, 90%, 70%) 40%, hsl(220, 95%, 85%) 70%, #ffffff 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 clip-path-polygon"></div>
        <div 
          className="absolute -right-20 sm:-right-40 -top-20 sm:-top-40 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full bg-blue-500/10" 
          style={{ filter: "blur(60px) sm:blur(80px)" }}
        ></div>
        <div 
          className="absolute -left-10 sm:-left-20 bottom-1/4 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 rounded-full bg-blue-500/10" 
          style={{ filter: "blur(60px) sm:blur(80px)" }}
        ></div>
      </div>

      <div className="section-container z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          <AnimatedSection animation="fade-in-up" className="text-left order-2 lg:order-1">
            <h1 className="heading-1 mb-4 sm:mb-6 text-gray-900 font-sans font-bold">
              Escritório Contábil <span className="text-gray-800 whitespace-nowrap">De Grandi</span>
            </h1>
            
            <p className="body-large text-gray-700 mb-6 sm:mb-8">
              Serviços contábeis completos e especializados. Cuidamos da contabilidade da sua empresa com excelência, segurança e tradição comprovada há mais de 40 anos no mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
              <a href="#contato" className="btn-primary flex items-center justify-center gap-2 text-center">
                Fale Conosco
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <Link to="/servicos" className="btn-secondary flex items-center justify-center gap-2 text-center">
                Nossos Serviços
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>

            {/* Features - Melhorada responsividade */}
            <div className="w-full">
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur-sm w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-slate-50">
                    <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="heading-4 text-gray-900 truncate">Contabilidade</h3>
                    <p className="body-small text-gray-600 truncate">Completa e precisa</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur-sm w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-gray-50">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="heading-4 text-gray-900 truncate">Assessoria</h3>
                    <p className="body-small text-gray-600 truncate">Personalizada</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur-sm w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex-shrink-0 flex items-center justify-center bg-gray-50">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="heading-4 text-gray-900 truncate">Atendimento</h3>
                    <p className="body-small text-gray-600 truncate">Especializado</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="order-1 lg:order-2">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="absolute -top-6 sm:-top-12 -left-6 sm:-left-12 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
                <img 
                  alt="Escritório Contábil De Grandi - Serviços profissionais de contabilidade" 
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" 
                  src="/lovable-uploads/010900fe-8304-457a-9438-4f38f6a3059c.png" 
                />
              </div>
              <div className="absolute -bottom-5 sm:-bottom-10 -right-5 sm:-right-10 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-primary/10 rounded-full filter blur-3xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
