import React, { useState } from 'react';
import { Icon } from './Icon';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Info Side */}
          <div className="lg:w-5/12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comece a proteger o que mais importa
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Entre em contato conosco para uma consultoria gratuita. Nossa equipe está pronta para entender suas necessidades e apresentar as melhores opções.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                    <Icon name="Phone" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Telefone</h4>
                  <p className="text-gray-600 hover:text-emerald-600 transition-colors">
                    <a href="tel:+5511999999999">(11) 99999-9999</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                    <Icon name="Mail" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">E-mail</h4>
                  <p className="text-gray-600 hover:text-emerald-600 transition-colors">
                    <a href="mailto:contato@kafirseguros.com.br">contato@kafirseguros.com.br</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600">
                    <Icon name="Clock" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Horário de Atendimento</h4>
                  <p className="text-gray-600 text-sm">Seg–Sex: 08:30–18:00</p>
                  <p className="text-gray-600 text-sm">Sáb: 08:30–13:00</p>
                  <p className="text-gray-600 text-sm">Dom: Horário marcado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 bg-gray-50 rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full mb-4">
                    <Icon name="CheckCircle" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                <p className="text-gray-600">Em breve um de nossos consultores entrará em contato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="Olá, gostaria de uma cotação para..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleCheckbox}
                    className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-500">
                    Concordo em receber contatos e e-mails da Kafir Corretora com informações sobre seguros e cotações.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  Solicitar Cotação
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;