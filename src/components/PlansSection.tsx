
import PlanCard from './PlanCard';
import AnimatedSection from './AnimatedSection';

const PlansSection = () => {
  const plans = [{
    title: "Contabilidade Rural",
    price: "Consulte",
    description: "Especializado em atividades rurais e agronegócio",
    features: [
      "Contabilidade especializada rural", 
      "Gestão de impostos rurais", 
      "Controle de safras e produção", 
      "Declarações específicas do setor"
    ],
    isPopular: false
  }, {
    title: "Micro e Pequenas Empresas",
    price: "Consulte",
    description: "Soluções completas para pequenos negócios",
    features: [
      "Contabilidade completa", 
      "Apuração de impostos", 
      "Folha de pagamento", 
      "Suporte especializado", 
      "Relatórios mensais"
    ],
    isPopular: true
  }, {
    title: "Profissional Liberal",
    price: "Consulte",
    description: "Para profissionais autônomos e liberais",
    features: [
      "Controle financeiro personalizado", 
      "Apuração de tributos", 
      "Declaração de renda", 
      "Consultoria tributária", 
      "Atendimento personalizado"
    ],
    isPopular: false
  }];

  return (
    <section id="planos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Conheça Nossos Planos</h2>
          <p className="section-subtitle">
            Escolha o plano que melhor se adapta às necessidades da sua empresa
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.title} animation="fade-in-up" delay={index * 150}>
              <PlanCard 
                title={plan.title} 
                price={plan.price} 
                description={plan.description} 
                features={plan.features} 
                isPopular={plan.isPopular} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3">Contadores experientes</h3>
          <p className="text-gray-600 mb-6">
            Acompanhamos sua contabilidade de perto, garantindo que impostos, 
            declarações e todas as obrigações contábeis estão sempre corretas.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
