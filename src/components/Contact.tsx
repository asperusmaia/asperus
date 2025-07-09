
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para automatizar seu negócio? Entre em contato e vamos conversar sobre suas necessidades
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-600 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Email</h3>
                <p className="text-gray-300">contato@asperus.com.br</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-amber-600 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Telefone</h3>
                <p className="text-gray-300">+55 (11) 9999-9999</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-amber-600 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Localização</h3>
                <p className="text-gray-300">São Paulo, Brasil</p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-white font-semibold text-xl mb-4">Por que escolher ÁSPERUS?</h3>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Mais de 5 anos de experiência em automação</li>
                <li>✓ Suporte técnico 24/7</li>
                <li>✓ Consultoria personalizada</li>
                <li>✓ Resultados garantidos em 30 dias</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Nome *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Empresa</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Mensagem *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  placeholder="Conte-nos sobre seus desafios e como podemos ajudar..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Enviar Mensagem
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
