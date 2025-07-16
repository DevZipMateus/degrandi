
import AnimatedSection from './AnimatedSection';
import { ChevronRight, Calculator, FileText, Users } from 'lucide-react';
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{
    background: 'linear-gradient(135deg, hsl(220, 75%, 55%) 0%, hsl(220, 85%, 60%) 20%, hsl(220, 90%, 70%) 40%, hsl(220, 95%, 85%) 70%, #ffffff 100%)'
  }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 clip-path-polygon"></div>
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-blue-500/10" style={{
        filter: "blur(80px)"
      }}></div>
        <div className="absolute -left-20 bottom-1/4 w-72 h-72 rounded-full bg-blue-500/10" style={{
        filter: "blur(80px)"
      }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fade-in-up" className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Escritório Contábil <span className="text-gray-800">De Grandi</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
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
                <div className="w-12 h-12 rounded-lg backdrop-blur-sm flex items-center justify-center bg-slate-50">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contabilidade</h3>
                  <p className="text-sm text-gray-600">Completa e precisa</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg backdrop-blur-sm flex items-center justify-center bg-gray-50">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Assessoria</h3>
                  <p className="text-sm text-gray-600">Personalizada</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg backdrop-blur-sm flex items-center justify-center bg-gray-50">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Atendimento</h3>
                  <p className="text-sm text-gray-600">Especializado</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
                <img alt="Escritório Contábil De Grandi - Contabilidade" className="rounded-2xl shadow-xl w-full object-cover" src="/lovable-uploads/17355d5f-03e3-44b4-9fbd-4ee68271f437.png" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full filter blur-3xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default HeroSection;
