
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedSection from '@/components/AnimatedSection';
import { Building2, FileText, Users, CheckCircle } from 'lucide-react';

const AberturaEmpresaPage = () => {
  useEffect(() => {
    // Schema.org for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'Abertura de Empresa - Escritório Contábil De Grandi',
      'description': 'Serviços completos de abertura de empresa em Gaurama/RS. Nossa equipe especializada te ajuda em todo o processo.',
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
                Abertura de Empresa
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Transforme sua ideia em realidade com nosso suporte completo para abertura de empresa
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Como Podemos Te Ajudar
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Nossa equipe especializada oferece suporte completo em todas as etapas do processo de abertura da sua empresa
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="fade-in-up" delay={100}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Documentação Completa
                  </h3>
                  <p className="text-gray-600">
                    Preparamos todos os documentos necessários para a abertura da sua empresa com total conformidade legal.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={200}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Consultoria Especializada
                  </h3>
                  <p className="text-gray-600">
                    Nossa equipe te orienta sobre o melhor tipo de empresa e regime tributário para seu negócio.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up" delay={300}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Processo Simplificado
                  </h3>
                  <p className="text-gray-600">
                    Cuidamos de todo o processo burocrático para que você possa focar no que realmente importa: seu negócio.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pronto para Abrir Sua Empresa?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Entre em contato conosco e dê o primeiro passo para transformar sua ideia em um negócio de sucesso.
              </p>
              <a 
                href="#contato" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-lg font-semibold"
              >
                Falar com um Especialista
              </a>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AberturaEmpresaPage;
