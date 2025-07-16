
import PlanCard from './PlanCard';
import AnimatedSection from './AnimatedSection';
import { Users, Shield, TrendingUp } from 'lucide-react';

const PlansSection = () => {
  const plans = [{
    title: "Contabilidade Rural",
    description: "Especializado em atividades rurais e agronegócio",
    features: [
      "Contabilidade especializada rural", 
      "Gestão de impostos rurais", 
      "Controle de safras e produção", 
      "Declarações específicas do setor"
    ]
  }, {
    title: "Micro e Pequenas Empresas",
    description: "Soluções completas para pequenos negócios",
    features: [
      "Contabilidade completa", 
      "Apuração de impostos", 
      "Folha de pagamento", 
      "Suporte especializado", 
      "Relatórios mensais"
    ]
  }, {
    title: "Profissional Liberal",
    description: "Para profissionais autônomos e liberais",
    features: [
      "Controle financeiro personalizado", 
      "Apuração de tributos", 
      "Declaração de renda", 
      "Consultoria tributária", 
      "Atendimento personalizado"
    ]
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
                description={plan.description} 
                features={plan.features} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center">
          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white shadow-xl overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center items-center mb-6">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                Contadores Experientes
              </h3>
              
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-white/90">
                Acompanhamos sua contabilidade de perto, garantindo que impostos, 
                declarações e todas as obrigações contábeis estão sempre corretas.
              </p>
              
              <div className="flex justify-center items-center gap-8 mt-8">
                <div className="flex items-center gap-2 text-white/80">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">Segurança Garantida</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-sm font-medium">Resultados Comprovados</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
