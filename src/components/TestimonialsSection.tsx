
import { useEffect, useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();

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
    },
    {
      name: "Carlos De Grandi Filho",
      company: "Comércio de Autopeças",
      content: "O escritório De Grandi transformou nossa gestão financeira. Agora temos relatórios claros e entendemos melhor nossa situação fiscal.",
      rating: 5
    },
    {
      name: "Lucia Fernandes",
      company: "Restaurante Bella Vista",
      content: "Desde que começamos com o Escritório De Grandi, nossa empresa cresceu 40%. Eles nos ajudam em todas as decisões estratégicas.",
      rating: 5
    },
    {
      name: "Roberto Machado",
      company: "Oficina Mecânica Central",
      content: "Profissionais extremamente qualificados. Sempre nos mantêm atualizados sobre mudanças na legislação e nos orientam da melhor forma.",
      rating: 5
    },
    {
      name: "Fernanda Oliveira",
      company: "Clínica Médica Saúde+",
      content: "Excelente assessoria contábil! Eles cuidam de toda parte burocrática para que possamos focar no atendimento aos nossos pacientes.",
      rating: 5
    },
    {
      name: "Pedro Grandi",
      company: "Agropecuária Grandi",
      content: "Trabalho em família há 15 anos com este escritório. Confiança total! Eles conhecem nosso negócio como ninguém.",
      rating: 5
    },
    {
      name: "Mariana Sperb",
      company: "Farmácia Popular",
      content: "Atendimento personalizado e sempre disponíveis para esclarecer dúvidas. Recomendo de olhos fechados para qualquer empresário.",
      rating: 5
    },
    {
      name: "Eduardo Santos",
      company: "Construtora Horizonte",
      content: "Organizaram toda nossa contabilidade e nos ajudaram a economizar significativamente em impostos. Parceiros essenciais!",
      rating: 5
    },
    {
      name: "Cristina De Bona",
      company: "Padaria Pão Nosso",
      content: "Desde a abertura da empresa, eles nos acompanham. Sempre prestativos e com soluções práticas para nossos desafios.",
      rating: 5
    },
    {
      name: "Alexandre Ribeiro",
      company: "Transportadora Regional",
      content: "Profissionalismo e competência excepcionais. Eles simplificaram nossa vida empresarial e nos deram tranquilidade para crescer.",
      rating: 5
    },
    {
      name: "Juliana Moreira",
      company: "Loja de Roupas Fashion",
      content: "O suporte do Escritório De Grandi foi fundamental para expandir nosso negócio. Sempre nos orientam com as melhores práticas.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!api) return;

    // Auto-play functionality
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="depoimentos" className="py-24" style={{ background: 'hsl(var(--section-bg))' }}>
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes dizem sobre nossos serviços
          </p>
        </AnimatedSection>

        <div className="mt-12 max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={`${testimonial.name}-${index}`} className="md:basis-1/2 lg:basis-1/3">
                  <AnimatedSection 
                    animation="fade-in-up" 
                    delay={index * 50}
                  >
                    <div className="testimonial-card h-full">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
