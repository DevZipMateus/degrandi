
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Building2, FileText, Users, CheckCircle, Pencil, ArrowLeft } from 'lucide-react';

const TrazerSuaEmpresaPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Schema.org for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Migrar Sua Empresa - Escritório Contábil De Grandi',
      'description': 'Migre sua empresa para o Escritório Contábil De Grandi. Oferecemos migração completa e serviços contábeis especializados em Gaurama/RS.',
      'url': window.location.href
    };

    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.text = JSON.stringify(schema);
    document.head.appendChild(scriptElement);

    return () => {
      if (document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow pt-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Migrar Sua Empresa
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Deseja migrar a contabilidade da sua empresa? Preencha o formulário que entraremos em contato com você.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Como Funciona
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Nosso processo simplificado em 4 etapas para migrar sua empresa
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Pencil className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Cadastro
                  </h3>
                  <p className="text-gray-600">
                    Deixe seus dados, nós entraremos em contato
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Documentos
                  </h3>
                  <p className="text-gray-600">
                    Nos envie a documentação solicitada, e assine os contratos
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={300}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Daremos entrada
                  </h3>
                  <p className="text-gray-600">
                    Cuidamos de tudo, você aguarda
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Check
                  </h3>
                  <p className="text-gray-600">
                    Seu CNPJ em mãos
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Perguntas Frequentes sobre Migração
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Mas se ficar com alguma dúvida entre em contato com a gente.
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <Accordion type="multiple" className="space-y-6">
                  <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Como faço para migrar minha empresa?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        É só você preencher o formulário de contato com as informações e enviar o número do seu CNPJ, entraremos em contato com você. Ou utilize nossos contatos: WhatsApp, E-mail ou Telefone.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Quanto tempo leva o processo de migração de contabilidade?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        O processo de migração é muito rápido e pode ser feito em qualquer momento do mês. O processo completo leva de 10 a 20 dias. Posteriormente entraremos em contato com o outro contador e solicitaremos o envio das informações/documentos.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        É preciso ter ou adquirir certificado digital para utilizar os serviços?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Para as empresas prestadoras de serviços enquadradas no Simples Nacional, que não possuem funcionários, não é necessário o uso do certificado digital. Para demais empresas é necessário do certificado digital e-CNPJ A1.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        O que preciso fazer durante o mês?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Enviar a movimentação financeira da sua empresa, extratos bancários, XML das notas fiscais de entrada e saída e dados dos funcionários se houver. Fique tranquilo(a), possuímos ferramentas para agilizar e facilitar esse envio.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Tenho funcionários. Vocês fazem a folha de pagamento?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Sim, entre em contato conosco para elaborarmos um plano personalizado.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Qual prazo que tenho para cancelar o contrato de prestação de serviços contábil?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        O prazo para cancelamento dos serviços contábeis é 60 dias após a contratação dos serviços, sem multa de rescisão do contrato. Para cancelar é necessário enviar a solicitação de cancelamento, por e-mail, com no mínimo 30 dias de antecedência.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Posso solicitar reunião com o Contador da minha Empresa?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Sim, para agendar reunião entre em contato pelos nossos canais de atendimento, Telefone, WhatsApp, e E-mail, e agende sua reunião.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Quero abrir uma Empresa, mas estou com dúvidas, o que devo fazer?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Acesse a nossa página Abrir Empresa para saber mais. Nossa equipe entrará em contato com você e fará as orientações e, caso seja de sua preferência, podemos agendar uma reunião.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quer saber quanto custa para cuidarmos da contabilidade da sua empresa?
              </h2>
              <p className="text-gray-600 text-lg mb-12">
                Preencha o formulário abaixo que em breve entraremos em contato.
              </p>
              <ContactForm />
            </AnimatedSection>
          </div>
        </section>

        {/* Back Button Section */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="text-center">
              <Button 
                onClick={handleGoBack}
                variant="outline"
                className="inline-flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TrazerSuaEmpresaPage;
