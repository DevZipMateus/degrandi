
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TrazerSuaEmpresaPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Migrar Sua Empresa - Escritório Contábil De Grandi';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Migre sua empresa para o Escritório Contábil De Grandi. Oferecemos migração completa e serviços contábeis especializados em Gaurama/RS.');
    }
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="spacing-section bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="section-container">
            <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Migrar Sua Empresa
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto">
                Deseja migrar a contabilidade da sua empresa? Preencha o formulário que entraremos em contato com você.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Processo de Migração */}
        <section className="spacing-section">
          <div className="section-container">
            <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">Como Funciona</h2>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Cadastro</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Deixe seus dados, nós entraremos em contato.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Documentos</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Nos envie a documentação solicitada, e assine os contratos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Daremos entrada</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Cuidamos de tudo, você aguarda.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Check</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Seu CNPJ em mãos.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA to Form */}
        <section className="spacing-section-sm bg-muted/50">
          <div className="section-container">
            <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                Quer saber quanto custa para cuidarmos da contabilidade da sua empresa?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                Preencha o formulário abaixo que em breve entraremos em contato.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form and FAQ Side by Side */}
        <section className="spacing-section">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <AnimatedSection animation="fade-in-up" className="order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">Entre em Contato</h3>
                <ContactForm />
              </AnimatedSection>

              {/* FAQ Section */}
              <AnimatedSection animation="fade-in-up" className="order-1 lg:order-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">Perguntas Frequentes</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-sm sm:text-base">Como faço para migrar minha empresa?</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      É só você preencher o formulário de contato com as informações e enviar o número do seu CNPJ, entraremos em contato com você. Ou utilize nossos contatos: WhatsApp, E-mail ou Telefone.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left text-sm sm:text-base">Quanto tempo leva o processo de migração de contabilidade?</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      O processo de migração é muito rápido e pode ser feito em qualquer momento do mês. O processo completo leva de 10 a 20 dias. Posteriormente entraremos em contato com o outro contador e solicitaremos o envio das informações/documentos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left text-sm sm:text-base">É preciso ter ou adquirir certificado digital para utilizar os serviços?</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Para as empresas prestadoras de serviços enquadradas no Simples Nacional, que não possuem funcionários, não é necessário o uso do certificado digital. Para demais empresas é necessário do certificado digital e-CNPJ A1.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left text-sm sm:text-base">O que preciso fazer durante o mês?</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Enviar a movimentação financeira da sua empresa, extratos bancários, XML das notas fiscais de entrada e saída e dados dos funcionários se houver. Fique tranquilo(a), possuímos ferramentas para agilizar e facilitar esse envio.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left text-sm sm:text-base">Tenho funcionários. Vocês fazem a folha de pagamento?</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Sim, entre em contato conosco para elaborarmos um plano personalizado.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left text-sm sm:text-base">Qual prazo que tenho para cancelar o contrato de prestação de serviços contábil?</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      O prazo para cancelamento dos serviços contábeis é 60 dias após a contratação dos serviços, sem multa de rescisão do contrato. Para cancelar é necessário enviar a solicitação de cancelamento, por e-mail, com no mínimo 30 dias de antecedência.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left text-sm sm:text-base">Posso solicitar reunião com o Contador da minha Empresa?</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Sim, para agendar reunião entre em contato pelos nossos canais de atendimento, Telefone, WhatsApp, e E-mail, e agende sua reunião.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left text-sm sm:text-base">Quero abrir uma Empresa, mas estou com dúvidas, o que devo fazer?</AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base">
                      Acesse a nossa página Abrir Empresa para saber mais. Nossa equipe entrará em contato com você e fará as orientações e, caso seja de sua preferência, podemos agendar uma reunião.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <section className="spacing-section-sm">
          <div className="section-container">
            <div className="text-center">
              <Button 
                onClick={handleGoBack}
                variant="outline"
                className="inline-flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para a Página Principal
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TrazerSuaEmpresaPage;
