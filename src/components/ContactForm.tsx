
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageSquare } from 'lucide-react';

interface FormData {
  nome: string;
  email: string;
  celular: string;
  cidade: string;
  estado: string;
  assunto: string;
  mensagem: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    celular: '',
    cidade: '',
    estado: '',
    assunto: '',
    mensagem: ''
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
    
    const message = `Olá! Gostaria de saber mais sobre abertura de empresa.

*Dados de contato:*
Nome: ${formData.nome}
Email: ${formData.email}
Celular: ${formData.celular}
Cidade: ${formData.cidade}
Estado: ${formData.estado}

*Sobre o que gostaria de falar:*
${formData.assunto}

*Mensagem:*
${formData.mensagem}`;

    const phoneNumber = "5433911010";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome *</Label>
          <Input
            id="nome"
            name="nome"
            type="text"
            required
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Seu nome completo"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="celular">Celular *</Label>
          <Input
            id="celular"
            name="celular"
            type="tel"
            required
            value={formData.celular}
            onChange={handleInputChange}
            placeholder="(00) 00000-0000"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cidade">Cidade *</Label>
          <Input
            id="cidade"
            name="cidade"
            type="text"
            required
            value={formData.cidade}
            onChange={handleInputChange}
            placeholder="Sua cidade"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="estado">Estado *</Label>
        <Input
          id="estado"
          name="estado"
          type="text"
          required
          value={formData.estado}
          onChange={handleInputChange}
          placeholder="Seu estado"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="assunto">Sobre o que gostaria de falar *</Label>
        <Input
          id="assunto"
          name="assunto"
          type="text"
          required
          value={formData.assunto}
          onChange={handleInputChange}
          placeholder="Ex: Abertura de MEI, Sociedade Limitada, etc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleInputChange}
          placeholder="Conte-nos mais detalhes sobre o que precisa..."
          rows={4}
        />
      </div>

      <div className="text-center">
        <Button 
          type="submit" 
          size="lg"
          className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4"
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          Enviar via WhatsApp
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
