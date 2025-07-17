
import AnimatedSection from './AnimatedSection';

const CTASection = () => {
  return (
    <section id="contato" className="spacing-section">
      <div className="section-container">
        <AnimatedSection className="max-w-5xl mx-auto text-center">
          <h2 className="heading-2 mb-6 sm:mb-8 text-white">
            A Improve não entrega relatórios. Entregamos clareza, lucro e decisão com segurança.
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-white/20">
            <p className="body-large mb-6 sm:mb-8 text-white/90">
              Transforme a gestão financeira da sua empresa e comece a tomar decisões baseadas em dados reais.
            </p>
            
            <form className="contact-form max-w-2xl mx-auto">
              <div className="form-row">
                <div>
                  <label htmlFor="name" className="form-label-responsive text-white">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input-responsive border-white/30 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60"
                    placeholder="Seu nome completo" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label-responsive text-white">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input-responsive border-white/30 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60"
                    placeholder="seu@email.com" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="form-label-responsive text-white">Empresa</label>
                <input 
                  type="text" 
                  id="company" 
                  className="form-input-responsive border-white/30 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60"
                  placeholder="Nome da sua empresa" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="form-label-responsive text-white">Mensagem</label>
                <textarea 
                  id="message" 
                  className="form-input-responsive border-white/30 focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60 resize-none"
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="mobile-cta bg-white text-primary hover:bg-white/90 font-medium rounded-md text-sm sm:text-base lg:text-lg transition-all duration-200 hover:shadow-lg"
                >
                  Quero clareza financeira
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
