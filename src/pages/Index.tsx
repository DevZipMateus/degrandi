
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CTAButtons from '@/components/CTAButtons';
import AboutSection from '@/components/AboutSection';
import PlansSection from '@/components/PlansSection';
import ServicesButton from '@/components/ServicesButton';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation with updated offset for smaller header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Reduced offset to account for smaller header heights
        const headerOffset = window.innerWidth >= 768 ? 64 : 56;
        window.scrollTo({
          top: targetElement.offsetTop - headerOffset,
          behavior: 'smooth'
        });
      });
    });

    // Schema.org for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Escritório Contábil De Grandi Ltda',
      'description': 'Escritório de contabilidade em Gaurama/RS oferecendo serviços contábeis completos para empresas e pessoas físicas.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Rua João Amândio Sperb, 229, Sala 106',
        'addressLocality': 'Gaurama',
        'addressRegion': 'RS',
        'addressCountry': 'BR'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+55-54-3391-1010',
        'contactType': 'customer service',
        'areaServed': 'BR',
        'availableLanguage': 'Portuguese'
      }
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
      
      if (document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow main-content">
        <HeroSection />
        <CTAButtons />
        <AboutSection />
        <PlansSection />
        <ServicesButton />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
