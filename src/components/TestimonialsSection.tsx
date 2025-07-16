
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "A melhor decisão foi terceirizar com a Improve. Eles não só organizam nossos números, mas nos ajudam a entendê-los e tomar melhores decisões.",
      author: "Carlos M.",
      role: "CEO, Agência de Marketing",
      rating: 5
    },
    {
      content: "Achei que precisava de um contador. Descobri que precisava de clareza. A Improve trouxe exatamente isso para o meu negócio.",
      author: "Renata S.",
      role: "Proprietária, Clínica de Estética",
      rating: 5
    },
    {
      content: "Hoje sei meu lucro, meu limite de retirada e o que posso investir. Isso mudou completamente a forma como gerencio minha empresa.",
      author: "Eduardo L.",
      role: "Diretor, Empresa de Tecnologia",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            O que nossos clientes dizem sobre nossa parceria
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.author} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <div className="testimonial-card h-full flex flex-col">
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="mt-auto">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-improve">{testimonial.role}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
