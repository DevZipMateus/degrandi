
import { Calculator, FileText, Users, PieChart, Building, BookOpen, TrendingUp, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Geral",
      description: "Escrituração contábil completa, balanços patrimoniais e demonstrações de resultado."
    },
    {
      icon: FileText,
      title: "Obrigações Fiscais",
      description: "Apuração e entrega de impostos, SPED, ECD, ECF e demais obrigações acessórias."
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Folha de pagamento, admissões, demissões, férias e benefícios trabalhistas."
    },
    {
      icon: PieChart,
      title: "Planejamento Tributário",
      description: "Estratégias para redução legal da carga tributária e otimização fiscal."
    },
    {
      icon: Building,
      title: "Abertura de Empresas",
      description: "Consultoria completa para constituição de empresas e alterações contratuais."
    },
    {
      icon: BookOpen,
      title: "Consultoria Contábil",
      description: "Orientação especializada em questões contábeis e empresariais."
    },
    {
      icon: TrendingUp,
      title: "Análise Financeira",
      description: "Relatórios gerenciais e análises para tomada de decisões estratégicas."
    },
    {
      icon: Shield,
      title: "Regularização Fiscal",
      description: "Soluções para regularização de pendências fiscais e tributárias."
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-20 bg-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções contábeis completas para o seu negócio
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 mt-10 md:mt-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <AnimatedSection 
                key={service.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="card-feature h-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{service.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-10 md:mt-12">
          <a href="#contato" className="btn-primary inline-block">
            Solicitar Orçamento
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
