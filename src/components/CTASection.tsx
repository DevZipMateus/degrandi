
import AnimatedSection from './AnimatedSection';

const CTASection = () => {
  return (
    <section id="contato" className="py-24">
      <div className="section-container">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            A Improve não entrega relatórios. Entregamos clareza, lucro e decisão com segurança.
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg border border-white/20">
            <p className="text-xl mb-8 text-white/90">
              Transforme a gestão financeira da sua empresa e comece a tomar decisões baseadas em dados reais.
            </p>
            
            <form className="space-y-6 max-w-lg mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-white/30 rounded-md focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60"
                    placeholder="Seu nome completo" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-white/30 rounded-md focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60"
                    placeholder="seu@email.com" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-1">Empresa</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 border border-white/30 rounded-md focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60"
                  placeholder="Nome da sua empresa" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  className="w-full px-4 py-3 border border-white/30 rounded-md focus:ring-white focus:border-white bg-white/10 text-white placeholder-white/60"
                  placeholder="Como podemos ajudar?" 
                  rows={4}
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-white text-primary hover:bg-white/90 font-medium py-4 px-8 rounded-md text-lg transition-all duration-200 hover:shadow-lg"
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
