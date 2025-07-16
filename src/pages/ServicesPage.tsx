import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Building, Users, Calculator, FileText, UserCheck, Briefcase } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const ServicesPage = () => {
  const phoneNumber = "5433911010";
  
  const handleWhatsAppClick = (serviceName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para o serviço de ${serviceName}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const services = [
    {
      icon: Building,
      title: "Condomínios",
      description: "Ajudamos sua empresa a implementar novas soluções na gestão de pessoas"
    },
    {
      icon: Users,
      title: "Consultoria",
      description: "Prestamos assessoria a pessoas físicas e jurídicas sobre questões tributárias, legislação empresarial, tributária (IRPJ, ICMS, PIS COFINS, IPI, ITR) e trabalhista (INSS, FGTS e MTb)."
    },
    {
      icon: Calculator,
      title: "Contabilidade",
      description: "A escrituração contábil é planejada e executada de acordo com as Normas Internacionais de Contabilidade – IFRS, adequadas à individualidade de cada empresa e às características das atividades desenvolvidas."
    },
    {
      icon: FileText,
      title: "Legalização de Empresas",
      description: "Neste setor são elaborados instrumentos de constituição de empresas, tais como contrato social e atas, alterações de contratos, baixa de empresas, serviços de parcelamento de impostos, certidões e serviços auxiliares junto a todos os órgão públicos."
    },
    {
      icon: UserCheck,
      title: "Recursos Humanos",
      description: "Abrange todos os serviços relacionados a folha de pagamento e manutenção do cadastro de funcionários, assim como registro dos funcionários, de forma integrada."
    },
    {
      icon: Briefcase,
      title: "Serviços Contábeis",
      description: "Com amplo conhecimento na área empresarial, contamos com uma excelente equipe de consultores para melhor atende-los independente de qual a sua necessidade."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-20" style={{ background: 'hsl(var(--section-bg))' }}>
          <div className="section-container">
            <AnimatedSection>
              <h1 className="section-title">Nossos Serviços</h1>
              <p className="section-subtitle">
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
                    <div className="card-feature h-full flex flex-col">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                        <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 flex-grow mb-4">{service.description}</p>
                      <button
                        onClick={() => handleWhatsAppClick(service.title)}
                        className="btn-primary w-full mt-auto"
                      >
                        Solicitar Orçamento
                      </button>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
