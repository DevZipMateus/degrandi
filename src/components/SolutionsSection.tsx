
import { LineChart, Eye, Brain, ClipboardCheck, Layers } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Eye,
      title: "Clareza dos números",
      description: "Relatórios simplificados e dashboards que mostram exatamente como está a saúde financeira do seu negócio."
    },
    {
      icon: LineChart,
      title: "Visão de lucratividade",
      description: "Acompanhamento constante de margens e resultados para identificar oportunidades de crescimento."
    },
    {
      icon: Brain,
      title: "Apoio estratégico",
      description: "Consultoria financeira para tomar decisões baseadas em dados e não em achismos."
    },
    {
      icon: ClipboardCheck,
      title: "Processos organizados",
      description: "Fluxos claros para pagamentos, recebimentos e conciliações, eliminando retrabalhos."
    },
    {
      icon: Layers,
      title: "Eficiência com ferramentas seguras",
      description: "Tecnologia de ponta para automatizar tarefas operacionais e garantir segurança dos seus dados."
    }
  ];

  return (
    <section id="solucoes" className="py-24" style={{ background: 'hsl(var(--section-bg))' }}>
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Mais que relatórios. Entregamos resultados.</h2>
          <p className="section-subtitle">
            Nossas soluções transformam números em decisões estratégicas para o crescimento do seu negócio
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            
            return (
              <AnimatedSection 
                key={solution.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="card-feature">
                  <div className="w-14 h-14 rounded-lg bg-improve/10 flex items-center justify-center mb-6">
                    <IconComponent className="h-7 w-7 text-improve" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
