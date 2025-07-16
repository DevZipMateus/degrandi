
import { CheckCircle, Award, Clock, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre o Escritório De Grandi</h2>
          <p className="section-subtitle">
            Tradição e excelência em serviços contábeis em Gaurama/RS
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Equipe do Escritório Contábil De Grandi" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <p className="text-lg text-gray-700">
              O Escritório Contábil De Grandi é uma empresa consolidada no mercado de Gaurama e região, 
              oferecendo serviços contábeis de alta qualidade para empresas de todos os portes.
            </p>
            
            <p className="text-lg text-gray-700">
              Nossa missão é fornecer soluções contábeis completas e personalizadas, 
              garantindo que nossos clientes tenham total segurança e tranquilidade em suas obrigações fiscais e contábeis.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Experiência</h3>
                  <p className="text-gray-600">Mais de 20 anos no mercado contábil</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Confiança</h3>
                  <p className="text-gray-600">Centenas de clientes satisfeitos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Agilidade</h3>
                  <p className="text-gray-600">Prazos sempre cumpridos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Qualidade</h3>
                  <p className="text-gray-600">Serviços certificados e precisos</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
