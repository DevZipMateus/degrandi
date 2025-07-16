
import AnimatedSection from './AnimatedSection';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Empresa de Varejo",
      content: "Excelente atendimento e profissionalismo. O Escritório De Grandi cuida de toda nossa contabilidade com muito cuidado e atenção aos detalhes.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Indústria Local",
      content: "Trabalho com eles há mais de 10 anos. Sempre pontuais, precisos e muito atenciosos. Recomendo para qualquer empresa.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Prestadora de Serviços",
      content: "Equipe muito competente e dedicada. Nos orientam em todas as questões fiscais e contábeis. Parceria de confiança.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.name} 
              animation="fade-in-up" 
              delay={index * 150}
            >
              <div className="testimonial-card">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
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
