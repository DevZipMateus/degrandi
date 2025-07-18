
import { Building, Users, Calculator, FileText, UserCheck, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Building,
      title: "Condomínios",
      description: "Ajudamos sua empresa a implementar novas soluções na gestão de pessoas, proporcionando eficiência e controle adequado dos processos administrativos."
    },
    {
      icon: Users,
      title: "Consultoria",
      description: "Prestamos assessoria a pessoas físicas e jurídicas sobre questões tributárias, legislação empresarial, tributária (IRPJ, ICMS, PIS COFINS, IPI, ITR) e trabalhista (INSS, FGTS e MTb), garantindo compliance e otimização fiscal."
    },
    {
      icon: Calculator,
      title: "Contabilidade",
      description: "A escrituração contábil é planejada e executada de acordo com as Normas Internacionais de Contabilidade – IFRS, adequadas à individualidade de cada empresa e às características das atividades desenvolvidas, assegurando precisão e conformidade."
    },
    {
      icon: FileText,
      title: "Legalização de Empresas",
      description: "Neste setor são elaborados instrumentos de constituição de empresas, tais como contrato social e atas, alterações de contratos, baixa de empresas, serviços de parcelamento de impostos, certidões e serviços auxiliares junto a todos os órgãos públicos."
    },
    {
      icon: UserCheck,
      title: "Recursos Humanos",
      description: "Abrange todos os serviços relacionados à folha de pagamento e manutenção do cadastro de funcionários, assim como registro dos funcionários, de forma integrada e em conformidade com a legislação trabalhista vigente."
    },
    {
      icon: Briefcase,
      title: "Serviços Contábeis",
      description: "Com amplo conhecimento na área empresarial, contamos com uma excelente equipe de consultores para melhor atendê-los independente de qual seja a sua necessidade, oferecendo soluções personalizadas e eficazes."
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-20">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-white">Nossos Serviços</h2>
          <p className="section-subtitle text-white/90 text-balanced">
            Soluções contábeis completas para o seu negócio
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
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                  </div>
                  <h3 className="heading-4 text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                  <p className="body-medium text-gray-600 paragraph-justified">{service.description}</p>
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
