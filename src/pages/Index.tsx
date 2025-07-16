
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProblemsSection from '@/components/ProblemsSection';
import SolutionsSection from '@/components/SolutionsSection';
import MethodologySection from '@/components/MethodologySection';
import ServicesSection from '@/components/ServicesSection';
import ResultsSection from '@/components/ResultsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import EgestorERP from '@/components/EgestorERP';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.offsetTop - 80, // offset for fixed header
          behavior: 'smooth'
        });
      });
    });

    // Adicionar tag de Schema.org para SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Improve Contabilidade e BPO Financeiro',
      'description': 'A Improve não entrega relatórios. Entregamos clareza, lucro e decisão com segurança. Menos caos. Mais resultados.',
      'url': 'https://www.improve.com.br',
      'logo': 'https://www.improve.com.br/logo.png',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+55-51-99765-2696',
        'contactType': 'customer service',
        'areaServed': 'BR',
        'availableLanguage': 'Portuguese'
      },
      'sameAs': [
        'https://www.instagram.com/improve.ce/'
      ]
    };

    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.text = JSON.stringify(schema);
    document.head.appendChild(scriptElement);

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
      
      document.head.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow pt-0">
        <HeroSection />
        <AboutSection />
        <ProblemsSection />
        <SolutionsSection />
        <MethodologySection />
        <ServicesSection />
        <ResultsSection />
        <TestimonialsSection />
        <EgestorERP />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
