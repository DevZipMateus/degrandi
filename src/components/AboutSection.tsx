
import { CheckCircle, Award, Clock, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24" style={{
      background: 'hsl(var(--section-bg))'
    }}>
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Vasta experiência em serviços contábeis e imobiliários em toda região Sul e restante do Brasil
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  alt="Equipe do Escritório Contábil De Grandi" 
                  className="w-full h-auto" 
                  src="https://i.pinimg.com/1200x/80/eb/5a/80eb5aa736bff707aad224866c98880e.jpg" 
                />
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="heading-4 text-white mb-4">Sobre Nós</h3>
                <p className="body-large text-white">
                  O Escritório De Grandi possui vasta experiência em serviços contábeis e na área de compra e venda de imóveis, sendo pioneiro em diversos segmentos de prestação de serviço ao cliente. Conta atualmente com atendimento na cidade de Viadutos/RS e também na cidade de Gaurama/RS, proporcionando aos clientes maior comodidade e acesso aos serviços oferecidos.
                </p>
              </div>

              <div>
                <h3 className="heading-4 text-white mb-4">Atuação</h3>
                <p className="body-large text-white">
                  Atuamos principalmente na prestação de serviços para a população de toda região Sul e restante do Brasil. Nossa equipe é treinada e qualificada, contando com profissionais formados nas áreas Contábil, de Administração de Empresas, Corretor de Imóveis e Avaliador Federal de Imóveis, possuímos excelente consultoria e dispomos de diversos meios de informação sobre rotinas Contábeis, Trabalhistas e Tributárias.
                </p>
              </div>

              <div>
                <h3 className="heading-4 text-white mb-4">Diferencial</h3>
                <p className="body-large text-white">
                  Qualidade nos serviços prestados e responsabilidade sempre foram nosso diferencial, além de uma vasta gama de serviços que prestamos aos nossos clientes, visando sempre a satisfação e resolutividade dos problemas que afetam as pessoas e as empresas no dia a dia.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="heading-4 text-white mb-2">Nosso Negócio</h3>
                  <p className="body-medium text-white/90">Prestar serviços confiáveis com qualidade, seriedade e segurança</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="heading-4 text-white mb-2">Nossa Missão</h3>
                  <p className="body-medium text-white/90">Garantir os melhores serviços e soluções com conhecimento e tecnologia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="heading-4 text-white mb-2">Nossos Princípios</h3>
                  <p className="body-medium text-white/90">Confiança, qualidade, inovação e relacionamentos duradouros</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="heading-4 text-white mb-2">Nossa Visão</h3>
                  <p className="body-medium text-white/90">Crescer junto com nossos clientes e com toda a comunidade</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
