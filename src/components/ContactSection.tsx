
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Gostaria de entrar em contato sobre os serviços contábeis.

*Dados de contato:*
Nome: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company}
Telefone: ${formData.phone}

*Mensagem:*
${formData.message}`;

    const phoneNumber = "5433911010";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return <>
      {/* Location Section */}
      <section id="localizacao" className="py-24">
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

                  {/* Google Maps for Viadutos */}
                  <div className="mt-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0!2d-52.0211366!3d-27.5723646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM0JzIwLjUiUyA1MsKwMDEnMTYuMSJX!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr" width="100%" height="192" style={{
                    border: 0
                  }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-48 rounded-lg" title="Mapa de Viadutos/RS" />
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

                  {/* Google Maps for Gaurama */}
                  <div className="mt-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0!2d-52.093249382199645!3d-27.587815027528517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzE2LjEiUyA1MsKwMDUnMzUuNyJX!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr" width="100%" height="192" style={{
                    border: 0
                  }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-48 rounded-lg" title="Mapa de Gaurama/RS" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-24">
        <div className="section-container">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Entre em Contato Conosco
            </h2>
            
            <div className="rounded-xl p-8 md:p-12 shadow-lg border border-primary/10 bg-[#2994fa]">
              <p className="text-xl mb-8 text-gray-700">
                Estamos prontos para atender sua empresa com excelência e profissionalismo.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                      placeholder="Seu nome completo" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                      placeholder="seu@email.com" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                    placeholder="Nome da sua empresa" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                    placeholder="(xx) xxxxx-xxxx" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" 
                    placeholder="Como podemos ajudar?" 
                    rows={4}
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="w-full md:w-auto btn-primary text-lg py-4 px-8 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Enviar via WhatsApp
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
