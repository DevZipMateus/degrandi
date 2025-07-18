
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

      <div className="section-container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <AnimatedSection animation="fade-in-up" className="text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900 font-professional">
              Escritório Contábil <span className="text-gray-800 whitespace-nowrap">De Grandi</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Serviços contábeis completos. Cuidamos da contabilidade da sua empresa com excelência e segurança há mais de 40 anos.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a href="#contato" className="btn-primary flex items-center justify-center gap-2">
                Fale Conosco
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <Link to="/servicos" className="btn-secondary flex items-center justify-center gap-2">
                Nossos Serviços
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg backdrop-blur-sm flex items-center justify-center bg-slate-50">
                  <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Contabilidade</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Completa e precisa</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg backdrop-blur-sm flex items-center justify-center bg-gray-50">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Assessoria</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Personalizada</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg backdrop-blur-sm flex items-center justify-center bg-gray-50">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Atendimento</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Especializado</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 sm:-top-12 -left-6 sm:-left-12 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
                <img 
                  alt="Escritório contábil moderno e profissional" 
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" 
                  src="/lovable-uploads/d25da03d-5afa-40a5-8a57-918146997680.jpg" 
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
