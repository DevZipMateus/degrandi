
import AnimatedSection from './AnimatedSection';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-improve/5 clip-path-polygon"></div>
        <div 
          className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-improve/10"
          style={{ filter: "blur(60px)" }}  
        ></div>
        <div 
          className="absolute -left-20 bottom-1/4 w-72 h-72 rounded-full bg-improve/10"
          style={{ filter: "blur(60px)" }}  
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fade-in-up" className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              BPO Financeiro com foco no que realmente importa: <span className="text-improve">lucro, clareza e tranquilidade</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Você cuida do seu negócio. A gente cuida do que tira seu sono.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#quem-somos" className="btn-primary flex items-center gap-2">
                Conheça a Improve
                <ChevronRight className="h-5 w-5" />
              </a>
              <a href="#servicos" className="btn-dark flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white">
                Nossos serviços
                <ChevronRight className="h-5 w-5" />
              </a>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-improve/20 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000" 
                  alt="Planejamento financeiro para empresas" 
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-improve/20 rounded-full filter blur-3xl"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
