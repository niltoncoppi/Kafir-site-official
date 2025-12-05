import React, { useState } from 'react';
import Layout from './Layout';
import { Icon } from './Icon';
import { CONSORTIUM_LP_BENEFITS, CONSORTIUM_LP_TESTIMONIALS } from '../constants';

const ConsortiumPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Tenho interesse em simular um consórcio.',
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
    console.log('Consortium Lead submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-emerald-400 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-6">
                      <Icon name="Rocket" size={14} />
                      Planejamento Financeiro
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                      Consórcios Kafir: <br />
                      <span className="text-emerald-400">Planeje sua conquista</span>
                  </h1>
                  <p className="text-emerald-100 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                      Amplie seu patrimônio sem juros, com parcelas que cabem no seu bolso. A estratégia ideal para imóveis e veículos.
                  </p>
                  <a 
                      href="#simulacao" 
                      className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
                  >
                      Quero minha simulação
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                  </a>
              </div>
              
              <div className="md:w-1/2">
                   <img 
                      src="https://images.unsplash.com/photo-1556740758-90de2929e507?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Planejamento financeiro" 
                      className="rounded-2xl shadow-2xl border-4 border-emerald-800/50 transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
                   />
              </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher o Consórcio?</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Uma modalidade segura e flexível para quem não tem pressa e quer economizar.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {CONSORTIUM_LP_BENEFITS.map((item, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                              <Icon name={item.iconName} size={28} />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Histórias de quem planejou e realizou</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {CONSORTIUM_LP_TESTIMONIALS.map((t) => (
                      <div key={t.id} className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100">
                           <div className="flex items-center gap-4 mb-4">
                              <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                              <div>
                                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                                  <span className="text-xs text-emerald-600 font-bold uppercase">{t.role}</span>
                              </div>
                           </div>
                           <p className="text-gray-600 italic">"{t.content}"</p>
                      </div>
                  ))}
              </div>
          </div>
        </section>

        {/* Capture Form */}
        <section id="simulacao" className="py-20 bg-emerald-900 text-white">
          <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">
                  <div className="md:w-1/2">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece hoje a construir seu patrimônio</h2>
                      <p className="text-emerald-100 mb-8 text-lg">
                          Preencha e receba sua simulação gratuita de consórcio. Um de nossos especialistas entrará em contato.
                      </p>
                      <ul className="space-y-4">
                          <li className="flex items-center gap-3">
                              <Icon name="CheckCircle" className="text-emerald-400" size={24} />
                              <span>Análise de perfil gratuita</span>
                          </li>
                          <li className="flex items-center gap-3">
                              <Icon name="CheckCircle" className="text-emerald-400" size={24} />
                              <span>Acesso aos melhores grupos</span>
                          </li>
                          <li className="flex items-center gap-3">
                              <Icon name="CheckCircle" className="text-emerald-400" size={24} />
                              <span>Suporte até a contemplação</span>
                          </li>
                      </ul>
                  </div>

                  <div className="md:w-1/2 w-full">
                      <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-2xl">
                          {submitted ? (
                               <div className="text-center py-10">
                                  <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full mb-4 inline-flex">
                                      <Icon name="CheckCircle" size={48} />
                                  </div>
                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Recebida!</h3>
                                  <p className="text-gray-600">Nossos especialistas entrarão em contato em breve.</p>
                               </div>
                          ) : (
                              <form onSubmit={handleSubmit} className="space-y-4">
                                  <h3 className="text-2xl font-bold mb-6 text-center">Simule agora</h3>
                                  <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                      <input 
                                          type="text" 
                                          name="name"
                                          required
                                          value={formData.name}
                                          onChange={handleChange}
                                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none" 
                                          placeholder="Seu nome completo" 
                                      />
                                  </div>
                                  <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                      <input 
                                          type="email" 
                                          name="email"
                                          required
                                          value={formData.email}
                                          onChange={handleChange}
                                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none" 
                                          placeholder="seu@email.com" 
                                      />
                                  </div>
                                  <div>
                                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                                      <input 
                                          type="tel" 
                                          name="phone"
                                          required
                                          value={formData.phone}
                                          onChange={handleChange}
                                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 outline-none" 
                                          placeholder="(00) 00000-0000" 
                                      />
                                  </div>
                                  <div className="flex items-start gap-2 pt-2">
                                    <input
                                      type="checkbox"
                                      id="consent-lp"
                                      name="consent"
                                      required
                                      checked={formData.consent}
                                      onChange={handleCheckbox}
                                      className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="consent-lp" className="text-xs text-gray-500">
                                      Autorizo receber comunicações da Kafir.
                                    </label>
                                  </div>
                                  <button 
                                      type="submit" 
                                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all mt-4"
                                  >
                                      Quero minha simulação
                                  </button>
                              </form>
                          )}
                      </div>
                  </div>
              </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ConsortiumPage;