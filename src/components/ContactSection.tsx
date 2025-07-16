import AnimatedSection from './AnimatedSection';
import LocationMap from './LocationMap';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
const ContactSection = () => {
  return <>
      {/* Location Section */}
      <section id="localizacao" className="py-24 bg-gray-50">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="section-title">Nossa Localização</h2>
            <p className="section-subtitle">
              Visite nossos escritórios no Rio Grande do Sul
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Viadutos/RS Location */}
            <AnimatedSection animation="slide-in-left">
              <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">VIADUTOS/RS</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                      <p className="text-gray-600">
                        Av. Independência - n° 377<br />
                        Centro<br />
                        Viadutos/RS - CEP: 99820-000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefones</h4>
                      <p className="text-gray-600">
                        (54) 3699-1514<br />
                        (54) 99688-5591
                      </p>
                    </div>
                  </div>

                  {/* Map for Viadutos */}
                  <div className="mt-6">
                    <LocationMap address="Av. Independência - n° 377, Centro, Viadutos/RS" coordinates={[-52.0136, -27.8954]} // Approximate coordinates for Viadutos/RS
                  className="h-48 w-full" />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Gaurama/RS Location */}
            <AnimatedSection animation="slide-in-right">
              <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">GAURAMA/RS</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                      <p className="text-gray-600">
                        Rua João Amândio Sperb - nº 229<br />
                        Centro<br />
                        Gaurama/RS - CEP: 99830-000
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telefones</h4>
                      <p className="text-gray-600">
                        (54) 3391-1010<br />
                        (54) 98424-7020
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    
                    
                  </div>

                  {/* Map for Gaurama */}
                  <div className="mt-6">
                    <LocationMap address="Rua João Amândio Sperb - nº 229, Centro, Gaurama/RS" coordinates={[-52.1297, -27.5814]} // Approximate coordinates for Gaurama/RS
                  className="h-48 w-full" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="section-container">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Entre em Contato Conosco
            </h2>
            
            <div className="bg-primary/5 rounded-xl p-8 md:p-12 shadow-lg border border-primary/10">
              <p className="text-xl mb-8 text-gray-700">
                Estamos prontos para atender sua empresa com excelência e profissionalismo.
              </p>
              
              <form className="space-y-6 max-w-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <input type="text" id="company" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Nome da sua empresa" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="(xx) xxxxx-xxxx" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea id="message" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" placeholder="Como podemos ajudar?" rows={4}></textarea>
                </div>
                
                <div className="text-center">
                  <button type="submit" className="w-full md:w-auto btn-primary text-lg py-4 px-8 flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>;
};
export default ContactSection;