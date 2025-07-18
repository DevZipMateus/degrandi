
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Building, Users, Calculator, FileText, UserCheck, Briefcase, ArrowLeft } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

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
      <main className="flex-grow pt-16 sm:pt-20">
        <section className="spacing-section">
          <div className="section-container">
            <AnimatedSection>
              <h1 className="section-title text-white">Nossos Serviços</h1>
              <p className="section-subtitle text-white/90 text-balanced">
                Soluções contábeis completas para o seu negócio
              </p>
            </AnimatedSection>

            <div className="grid-responsive-3 mt-8 sm:mt-10 md:mt-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                
                return (
                  <AnimatedSection 
                    key={service.title} 
                    animation="fade-in-up" 
                    delay={index * 100}
                  >
                    <div className="card-feature h-full flex flex-col">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-white/20 flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 flex-grow mb-3 sm:mb-4 leading-relaxed paragraph-justified">
                        {service.description}
                      </p>
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

            <AnimatedSection className="text-center mt-10 md:mt-12">
              <Link to="/" className="bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-all duration-200 inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
