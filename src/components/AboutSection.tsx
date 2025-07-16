import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const AboutSection = () => {
  return <section id="quem-somos" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Quem Somos</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-improve/10 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000" alt="Equipe Improve" className="w-full h-auto" />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <p className="text-lg text-gray-700">
              Somos especialistas em organizar o caos financeiro de pequenas e médias empresas.
            </p>
            
            <p className="text-lg text-gray-700">
              Combinamos tecnologia, assessoria próxima e visão estratégica para transformar números em decisões assertivas para o seu negócio.
            </p>
            
            <blockquote className="pl-4 border-l-4 border-improve italic text-xl my-8">
              "Controle financeiro não é planilha, é poder de decisão."
            </blockquote>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Nossa Equipe</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img alt="Diego Fiuza" className="w-full h-full object-cover" src="/lovable-uploads/7ad60b21-ed30-4f34-a9eb-028d5ea19ff3.png" />
                </div>
                <h4 className="text-xl font-semibold">Diego Fiuza</h4>
                <p className="text-improve text-sm mb-2">Co-fundador</p>
                <p className="text-gray-600 text-center sm:text-left">
                  Especialista em finanças corporativas com mais de 15 anos de experiência.
                </p>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img alt="Juliano Silva" className="w-full h-full object-cover" src="/lovable-uploads/e32e150b-745f-48b0-915d-4ee9884b6217.png" />
                </div>
                <h4 className="text-xl font-semibold">Juliano Silva</h4>
                <p className="text-improve text-sm mb-2">Co-fundador</p>
                <p className="text-gray-600 text-center sm:text-left">
                  Contador com especialização em gestão financeira e planejamento tributário.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default AboutSection;