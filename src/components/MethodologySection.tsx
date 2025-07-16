
import { ClipboardList, BarChart2, Zap, LineChart, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card } from './ui/card';

const MethodologySection = () => {
  const steps = [{
    number: 1,
    icon: ClipboardList,
    title: "Diagnóstico personalizado",
    description: "Análise detalhada da situação financeira atual da sua empresa para identificar pontos de melhoria."
  }, {
    number: 2,
    icon: BarChart2,
    title: "Estruturação do financeiro",
    description: "Organização e implementação de processos financeiros claros e eficientes."
  }, {
    number: 3,
    icon: Zap,
    title: "Acompanhamento próximo + dados atualizados diariamente",
    description: "Monitoramento constante dos indicadores financeiros para ajustes em tempo real."
  }, {
    number: 4,
    icon: LineChart,
    title: "Implantação com bonificação e treinamento do seu time",
    description: "Implementação das soluções com treinamento da equipe e sistemas de bonificação por resultados."
  }, {
    number: 5,
    icon: TrendingUp,
    title: "Decisões assertivas com foco no lucro",
    description: "Apoio estratégico contínuo para maximizar resultados e garantir o crescimento sustentável."
  }];
  
  return (
    <section id="metodologia" className="py-16 md:py-20 bg-improve/5">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">O Caminho do Lucro</h2>
          <p className="section-subtitle">
            Nossa metodologia foi desenvolvida para transformar caos em clareza financeira
          </p>
        </AnimatedSection>

        <div className="mt-16 md:flex items-center justify-center hidden">
          {/* You can add visual methodology diagram here if needed */}
        </div>

        {/* Versão em cards para dispositivos móveis ou como complemento */}
        <div className="relative mt-12 md:mt-16">
          {/* Linha conectora (para desktop) */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-improve/30 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <AnimatedSection 
                  key={step.title} 
                  animation="fade-in-up" 
                  delay={index * 150} 
                  className="relative"
                >
                  <Card className="h-full border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 px-4 py-5 md:p-6">
                    <div className="flex flex-col h-full">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full text-improve-black font-bold text-xl flex items-center justify-center mb-4 md:mb-6 lg:mx-auto ${index < 3 ? 'bg-improve' : index === 3 ? 'bg-gray-500' : 'bg-improve-black text-white'}`}>
                        {step.number}
                      </div>
                      <div className="lg:text-center">
                        <IconComponent className={`h-7 w-7 md:h-8 md:w-8 mb-3 md:mb-4 lg:mx-auto ${index < 3 ? 'text-improve' : index === 3 ? 'text-gray-500' : 'text-improve-black'}`} />
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
                        <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
