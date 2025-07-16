
import AnimatedSection from './AnimatedSection';
import { ChevronRight, Calculator, FileText, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, hsl(220, 75%, 50%) 0%, #5897fc 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 clip-path-polygon"></div>
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-white/10" style={{
          filter: "blur(60px)"
        }}></div>
        <div className="absolute -left-20 bottom-1/4 w-72 h-72 rounded-full bg-white/10" style={{
          filter: "blur(60px)"
        }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fade-in-up" className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Escritório Contábil <span className="text-white/90">De Grandi</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Serviços contábeis completos em Gaurama/RS. Cuidamos da contabilidade da sua empresa com excelência e segurança há mais de 20 anos.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contato" className="btn-primary flex items-center gap-2">
                Fale Conosco
                <ChevronRight className="h-5 w-5" />
              </a>
              <a href="#servicos" className="btn-secondary flex items-center gap-2">
                Nossos Serviços
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Contabilidade</h3>
                  <p className="text-sm text-white/70">Completa e precisa</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Assessoria</h3>
                  <p className="text-sm text-white/70">Personalizada</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Atendimento</h3>
                  <p className="text-sm text-white/70">Especializado</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-white/20 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
                <img alt="Escritório contábil moderno e profissional" className="rounded-2xl shadow-xl w-full object-cover" src="/lovable-uploads/d25da03d-5afa-40a5-8a57-918146997680.jpg" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/20 rounded-full filter blur-3xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
