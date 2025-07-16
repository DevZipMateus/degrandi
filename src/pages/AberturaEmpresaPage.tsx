import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Building2, FileText, Users, CheckCircle, Pencil } from 'lucide-react';

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

        {/* Steps Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-in-up" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Como Funciona
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Nosso processo simplificado em 4 etapas para abrir sua empresa
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
                Dúvidas Frequentes de Quem Está Abrindo uma Empresa
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
                        1 - Quero abrir uma empresa. Por onde começar?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        O primeiro passo é sempre o mais importante. Para que não haja erros, é essencial ao empreendedor saber se realmente é essa a sua intenção e se tem condições para manter um negócio próprio e o que isso implica. O primeiro passo é ter clara a ideia do que se trata a empresa, como irá atuar e em que mercado estará inserido o seu negócio e ter profundo conhecimento do segmento escolhido. O segundo passo é fazer uma consulta a um contador de confiança, já que há diferentes modalidades e enquadramentos entre as empresas e este profissional poderá fazer este levantamento e indicar as opções adequadas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        2 - Qual a melhor opção de Enquadramento para minha Empresa?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Após verificar qual a atividade pretendida, qual a estimativa de faturamento anual e se irá possuir funcionários, vamos orientar você sobre qual será o melhor Enquadramento para sua Empresa, visando a menor carga tributária dentro da Lei.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        3 - Qual o melhor Regime Tributário para minha Empresa?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Após verificar qual a atividade pretendida, qual a estimativa de faturamento anual e a quantidade de funcionários, faremos um planejamento tributário e vamos orientar você sobre qual será o melhor Regime Tributário para sua Empresa.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        4 - Quantos dias demora para abrir minha Empresa?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Depende do tipo de Empresa que você pretende abrir. Normalmente leva-se até 20 dias úteis, porém esse prazo pode ser alterado caso haja alguma pendência com o zoneamento (área escolhida), documentação, ou para alguns segmentos que necessitam de licenças específicas.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        5 - Quais as taxas que devo pagar para abrir minha Empresa?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Atualmente, são cobradas taxas da Junta comercial. Existe também uma cobrança anual por parte das Prefeituras quanto a Taxa de Funcionamento e Taxa de Publicidade, mas existe variações de valores e datas de cobrança conforme cada município.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        6 - Preciso de certificado digital E-CPF para abrir minha Empresa?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Não, poderá ser inicialmente utilizado o do contador para abertura da sua empresa.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        7 - Não quero ter sócios, posso abrir minha empresa sozinho?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        Sim, se você pretende abrir sua Empresa sozinho, hoje existem a opção de ser MEI ou Empresário Individual.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        8 - O que é Empresário Individual?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="text-gray-600 leading-relaxed space-y-3">
                        <p>
                          O Empresário Individual é a pessoa natural que exerce atividade empresarial, sendo que possui inscrição no CNPJ para fins tributários, mas não é considerado pessoa jurídica de direito privado de acordo com o Código Civil.
                        </p>
                        <p>Veremos a seguir as particularidades que o Empresário Individual possui:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Não tem limite máximo de faturamento</li>
                          <li>A responsabilidade do titular da empresa é ilimitada, ou seja, não existe separação patrimonial da pessoa física e da empresa, dessa forma O empresário Individual responde de forma ilimitada pelas dívidas da Empresa.</li>
                          <li>Não tem exigência mínima de capital para ser integralizado no momento de sua constituição.</li>
                          <li>No nome empresarial deverá figurar de forma completa o nome do empresário. Deverá conter também, obrigatoriamente, o gênero do negócio, de acordo com o objeto social. Observando que somente poderão ser abreviados seus prenomes. Sendo assim, não poderá ser abreviado o último sobrenome</li>
                          <li>Somente é permitido um Empresário Individual por CPF.</li>
                        </ul>
                        <p>Para saber mais detalhes entre em contato conosco.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        9 - O que é sociedade Simples?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="text-gray-600 leading-relaxed space-y-3">
                        <p>
                          As Sociedades Simples são aqueles em que os sócios exerçam profissão intelectual, de natureza científica, literária ou artística, desde que o exercício da profissão não constitua elemento de empresa.
                        </p>
                        <p>
                          Ponto fundamental na Sociedade Simples é que a atividade fim depende diretamente da atuação e conhecimento pessoal dos seus sócios. Por exemplo, uma sociedade constituída por dentistas, onde os mesmos exerçam a atividade da empresa. Esse modelo societário deve ser registrado no Cartório de Registro Civil das Pessoas Jurídicas.
                        </p>
                        <p>Para saber mais detalhes entre em contato conosco.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="bg-white rounded-lg shadow-md border-none">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <h3 className="text-lg font-semibold text-gray-900">
                        10 - O que é sociedade Empresária?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="text-gray-600 leading-relaxed space-y-3">
                        <p>
                          Sociedade Empresária é a que irá atuar da maneira prevista no art. 966 do Código Civil, ou seja, exercerá profissionalmente atividade econômica organizada para produção ou a circulação de bens ou de serviços.
                        </p>
                        <p>
                          As Sociedades Empresárias devem ser registradas na Junta Comercial. Um ponto importante é que as Sociedades Empresárias estão sujeitas a Lei da Falência (Lei nº 11.101, de 9 de fevereiro de 2005), enquanto as Sociedades Simples não estão.
                        </p>
                        <p>
                          Para esclarecimento, tal Lei disciplina a recuperação judicial, a recuperação extrajudicial e a falência do empresário e da sociedade empresária. Quando a empresa passa por algum momento de complicação financeira e se torna incapaz de pagar suas dívidas, pode entrar com o pedido de recuperação judicial, que é o processo jurídico que visa evitar a falência da empresa, que com a ciência de seus credores e demais diretrizes impostas, poderá continuar suas atividades, buscando pagar suas dívidas e se reestruturar financeiramente.
                        </p>
                        <p>Para saber mais detalhes entre em contato conosco.</p>
                      </div>
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
                Deixe seus dados e entraremos em contato!
              </h2>
              <p className="text-gray-600 text-lg mb-12">
                Preencha o formulário abaixo e nossa equipe especializada entrará em contato para dar início ao processo de abertura da sua empresa.
              </p>
              <ContactForm />
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
