
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
    <section id="metodologia" className="spacing-section">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-white">O Caminho do Lucro</h2>
          <p className="section-subtitle text-white/90">
            Nossa metodologia foi desenvolvida para transformar caos em clareza financeira
          </p>
        </AnimatedSection>

        {/* Metodologia em cards responsivos */}
        <div className="relative mt-8 sm:mt-12 lg:mt-16">
          {/* Linha conectora (apenas para desktop) */}
          <div className="absolute top-16 sm:top-20 lg:top-24 left-0 right-0 h-0.5 sm:h-1 bg-white/30 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <AnimatedSection 
                  key={step.title} 
                  animation="fade-in-up" 
                  delay={index * 150} 
                  className="relative"
                >
                  <Card className="h-full border border-white/20 shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 lg:p-6 bg-white/10 backdrop-blur-sm">
                    <div className="flex flex-col h-full">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white text-primary font-bold text-base sm:text-lg lg:text-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 mx-auto lg:mx-auto">
                        {step.number}
                      </div>
                      <div className="text-center lg:text-center">
                        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 mb-2 sm:mb-3 lg:mb-4 mx-auto text-white" />
                        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-2 sm:mb-3 text-white leading-tight">{step.title}</h3>
                        <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed">{step.description}</p>
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
