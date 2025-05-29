
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `*Nova mensagem do site*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Assunto:* ${formData.subject}\n\n*Mensagem:*\n${formData.message}`;
    
    // WhatsApp URL with Brazilian number format
    const whatsappUrl = `https://wa.me/5532999482095?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success toast
    toast({
      title: "Mensagem enviada",
      description: "Entrarei em contato em breve.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-gray-800 py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 silver-title-subtle">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Estou disponível para novas oportunidades. Entre em contato comigo para conversar
            sobre análise de dados, projetos ou oportunidades de trabalho.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 animate-on-scroll">
            <Card className="contact-card p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Informações de Contato</h3>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <Mail className="text-gray-300" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-xs sm:text-sm">Email</h4>
                    <p className="text-white font-medium text-sm sm:text-base">asra.devops@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <Phone className="text-gray-300" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-xs sm:text-sm">Telefone</h4>
                    <p className="text-white font-medium text-sm sm:text-base">(32) 99948-2095</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-xl flex items-center justify-center">
                    <MapPin className="text-gray-300" size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300 text-xs sm:text-sm">Localização</h4>
                    <p className="text-white font-medium text-sm sm:text-base">Minas Gerais</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="contact-card p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">Redes Sociais</h3>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href="https://www.linkedin.com/in/alvaroassuncao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <Linkedin className="text-gray-300" size={16} />
                </a>
                <a 
                  href="https://github.com/alvarorosaassuncao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <Github className="text-gray-300" size={16} />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <Card className="contact-card p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Envie uma Mensagem</h3>
              </div>
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">Seu Nome</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-700 border-gray-600 focus:border-primary rounded-xl text-white placeholder:text-gray-500 text-sm sm:text-base"
                      placeholder="João Silva"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">Seu Email</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-700 border-gray-600 focus:border-primary rounded-xl text-white placeholder:text-gray-500 text-sm sm:text-base"
                      placeholder="joao@exemplo.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">Assunto</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-white focus:border-primary focus:outline-none text-sm sm:text-base"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Oportunidade de Trabalho">Oportunidade de Trabalho</option>
                    <option value="Projeto">Projeto</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-700 border-gray-600 focus:border-primary min-h-[100px] sm:min-h-[120px] rounded-xl text-white placeholder:text-gray-500 text-sm sm:text-base"
                    placeholder="Sua mensagem aqui..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <Send size={18} className="mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
