
import { AlertCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ProblemsSection = () => {
  const problems = [
    {
      title: "Vejo, mas não vejo o dinheiro",
      description: "Você até tem dinheiro em caixa, mas não sabe exatamente quanto pode usar para investir ou retirar."
    },
    {
      title: "Não sei se posso gastar com isso",
      description: "Falta clareza para tomar decisões sobre onde e quando investir recursos da empresa."
    },
    {
      title: "Não tenho tempo para emitir boletos e NFs",
      description: "Processos operacionais consomem tempo que deveria ser dedicado ao crescimento do negócio."
    },
    {
      title: "Não sei qual minha margem de lucro",
      description: "Sem conhecer os números reais, é impossível saber se o negócio está realmente lucrando."
    }
  ];

  return (
    <section id="problemas" className="py-24 bg-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Isso soa familiar?</h2>
          <p className="section-subtitle">
            Problemas comuns que ajudamos empresários a resolver diariamente
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {problems.map((problem, index) => (
            <AnimatedSection 
              key={problem.title} 
              animation="fade-in-up" 
              delay={index * 100}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <a href="#solucoes" className="btn-primary inline-block mt-6">
            Você precisa da Improve
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemsSection;
