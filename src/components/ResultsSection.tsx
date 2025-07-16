
import { TrendingUp, TrendingDown, BarChart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingUp,
      title: "+38% de lucro",
      period: "em 6 meses",
      description: "Cliente do setor de serviços que aumentou significativamente sua margem após implementação da nossa metodologia."
    },
    {
      icon: TrendingDown,
      title: "-R$12 mil em prejuízos",
      period: "evitados",
      description: "Empresa de comércio que identificou e corrigiu falhas nos processos financeiros que geravam perdas constantes."
    },
    {
      icon: BarChart,
      title: "Fluxo de caixa previsível",
      period: "planejamento de 6 meses",
      description: "Startup que conseguiu estabelecer previsibilidade financeira para planejar expansão com segurança."
    }
  ];

  return (
    <section id="resultados" className="py-24 bg-improve-black text-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-white">Resultados que falam por si</h2>
          <p className="section-subtitle text-gray-300">
            Casos reais de transformação financeira nas empresas que atendemos
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            
            return (
              <AnimatedSection 
                key={result.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/5 h-full flex flex-col">
                  <div className="rounded-full bg-improve w-14 h-14 flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7 text-improve-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{result.title}</h3>
                  <p className="text-improve mb-4 font-medium">{result.period}</p>
                  <p className="text-gray-300">{result.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
