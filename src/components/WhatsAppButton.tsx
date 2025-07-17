
const WhatsAppButton = () => {
  const phoneNumber = "5433911010";
  const message = "Olá! Gostaria de saber mais sobre os serviços contábeis do Escritório De Grandi.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-transparent hover:scale-110 rounded-full p-2 shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500/50"
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/42312968-cec5-40e7-8f92-7a6f3fc4e80e.png" 
        alt="WhatsApp" 
        className="h-14 w-14"
      />
    </button>
  );
};

export default WhatsAppButton;
