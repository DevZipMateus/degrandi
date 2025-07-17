
import React from 'react';

const EgestorERP = () => {
  // Link for both the title and button
  const egestorLink = "https://www.egestor.com.br/afl/10305";

  return (
    <section className="spacing-section bg-white overflow-hidden">
      <div className="section-container max-w-6xl">
        {/* Two-column layout for desktop, stack on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-10">
          {/* Left column - Header Text */}
          <div className="lg:w-1/2 text-center lg:text-left mb-4 sm:mb-6 lg:mb-0 animate-fade-in">
            <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
              <h2 className="heading-2 text-gray-800 mb-2 sm:mb-3 lg:mb-4 leading-tight">
                Sistema de gestão empresarial
              </h2>
            </a>
            <p className="body-medium text-gray-600 font-normal">
              Dobre seus lucros otimizando sua gestão
            </p>
          </div>
          
          {/* Right column - Video Container */}
          <div className="lg:w-1/2 rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl animate-fade-in">
            <video 
              className="w-full aspect-video object-cover" 
              autoPlay 
              muted 
              loop 
              playsInline 
              poster="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png"
            >
              <source src="https://egestor.com.br/assets/img/egestor-gestao-simples-para-crescer.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
        
        {/* CTA Button - Centered below both columns */}
        <div className="flex justify-center animate-fade-in">
          <a href={egestorLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <button className="w-full py-2 sm:py-2.5 lg:py-3 bg-[#7CFFA0] hover:bg-[#6DF090] text-black font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] text-sm sm:text-base lg:text-lg">
              Teste grátis
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EgestorERP;
