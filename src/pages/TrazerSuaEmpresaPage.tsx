
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building2, CheckCircle, Users, Clock, FileText } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TrazerSuaEmpresaPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Trazer Sua Empresa - Escritório Contábil De Grandi';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transfira sua empresa para o Escritório Contábil De Grandi. Oferecemos migração completa e serviços contábeis especializados em Gaurama/RS.');
    }
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de trazer minha empresa para o Escritório Contábil De Grandi. Podem me ajudar com a migração?"
    );
    window.open(`https://wa.me/5554999999999?text=${message}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <Building2 className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Traga Sua Empresa Para Nós
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Migre sua contabilidade para o Escritório De Grandi e tenha acesso a serviços especializados, 
                atendimento personalizado e toda expertise que sua empresa merece.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Vantagens Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Por Que Escolher o De Grandi?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl border bg-card">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Atendimento Personalizado</h3>
                  <p className="text-muted-foreground">
                    Cada empresa é única. Oferecemos soluções personalizadas para suas necessidades específicas.
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl border bg-card">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Migração Rápida</h3>
                  <p className="text-muted-foreground">
                    Processo de migração eficiente e sem complicações. Cuidamos de toda a transferência.
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl border bg-card">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Serviços Completos</h3>
                  <p className="text-muted-foreground">
                    Contabilidade, folha de pagamento, fiscal, tributário e consultoria empresarial.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Processo de Migração */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Como Funciona a Migração</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Análise Inicial</h3>
                    <p className="text-muted-foreground">
                      Avaliamos sua situação atual e identificamos todas as informações necessárias para a migração.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Coleta de Documentos</h3>
                    <p className="text-muted-foreground">
                      Solicitamos e organizamos toda a documentação necessária do seu contador anterior.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transferência e Configuração</h3>
                    <p className="text-muted-foreground">
                      Realizamos a transferência completa e configuramos todos os sistemas para sua empresa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Início dos Serviços</h3>
                    <p className="text-muted-foreground">
                      Sua empresa já está conosco! Começamos a prestar todos os serviços contábeis necessários.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Quanto tempo demora a migração?</AccordionTrigger>
                  <AccordionContent>
                    O processo de migração geralmente leva de 15 a 30 dias, dependendo da complexidade da empresa e da disponibilidade da documentação.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Preciso pagar alguma taxa de migração?</AccordionTrigger>
                  <AccordionContent>
                    Não cobramos taxas adicionais para migração. O processo está incluído no início da prestação de nossos serviços.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Quais documentos são necessários?</AccordionTrigger>
                  <AccordionContent>
                    Geralmente precisamos do contrato social, alterações contratuais, livros digitais, declarações dos últimos anos e informações sobre funcionários (se houver).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>E se houver pendências com o contador anterior?</AccordionTrigger>
                  <AccordionContent>
                    Auxiliamos na identificação e resolução de pendências, orientando sobre os melhores caminhos para regularizar a situação da empresa.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Vocês atendem empresas de todos os portes?</AccordionTrigger>
                  <AccordionContent>
                    Sim, atendemos desde MEIs até empresas de grande porte, sempre com soluções adequadas para cada realidade empresarial.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Pronto Para Trazer Sua Empresa?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Entre em contato conosco e inicie o processo de migração hoje mesmo!
              </p>
              <Button 
                onClick={handleWhatsAppContact}
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Iniciar Migração pelo WhatsApp
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Back Button */}
        <section className="py-8">
          <div className="container mx-auto px-4">
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
