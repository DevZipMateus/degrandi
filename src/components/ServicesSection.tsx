
import { Calculator, FileText, Users, PieChart, Building, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Contabilidade Financeira",
      description: "Escrituração contábil, elaboração de balanços e DRE com linguagem clara e acessível."
    },
    {
      icon: FileText,
      title: "Contabilidade Fiscal",
      description: "Apuração de impostos, escrituração fiscal e cumprimento das obrigações tributárias."
    },
    {
      icon: Users,
      title: "Contabilidade Trabalhista",
      description: "Folha de pagamento, férias, rescisões e todas as obrigações relacionadas a colaboradores."
    },
    {
      icon: PieChart,
      title: "Planejamento Tributário",
      description: "Estratégias para reduzir a carga tributária de forma legal e segura para sua empresa."
    },
    {
      icon: Building,
      title: "Abertura/Encerramento de Empresas",
      description: "Suporte completo para legalização, alterações contratuais ou encerramento de atividades."
    },
    {
      icon: BookOpen,
      title: "Obrigações Acessórias",
      description: "Entrega de declarações obrigatórias como SPED, ECD, ECF e outras exigências fiscais."
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-20 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Gestão Financeira e Contábil completa</h2>
          <p className="section-subtitle">
            Soluções integradas que atendem todas as necessidades do seu negócio
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mt-10 md:mt-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <AnimatedSection 
                key={service.title} 
                animation="fade-in-up" 
                delay={index * 100}
              >
                <div className="card-feature h-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-improve/10 flex items-center justify-center mb-4 md:mb-6">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-improve" />
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
            Solicitar orçamento personalizado
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
