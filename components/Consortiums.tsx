import React from 'react';
import { CONSORTIUM_FEATURES } from '../constants';
import { Icon } from './Icon';

const Consortiums: React.FC = () => {
  return (
    <section id="consorcios" className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-white relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
                <Icon name="TrendingUp" size={14} />
                Estratégia Financeira
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Consórcios e <br/>
              <span className="text-emerald-600">Alavancagem de Patrimônio</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Planeje a compra de bens ou amplie seu patrimônio de forma econômica e sem juros. 
              Descubra como o consórcio pode ser uma estratégia de investimento segura, 
              flexível e inteligente para o seu futuro.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {CONSORTIUM_FEATURES.map((feature, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-emerald-200">
                        <div className="flex-shrink-0 mt-1 text-emerald-600">
                             <div className="bg-emerald-50 p-2 rounded-lg">
                                <Icon name={feature.iconName} size={20} />
                             </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                            <p className="text-sm text-gray-500 leading-snug">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <a 
              href="#contato" 
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto group"
            >
              Quero alavancar meu patrimônio
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>

          {/* Right Image/Illustration */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Planejamento de patrimônio e investimentos imobiliários" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur shadow-lg p-4 rounded-2xl border border-gray-100 max-w-xs hidden sm:block">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                            <Icon name="Landmark" size={20} />
                        </div>
                        <span className="font-bold text-gray-900">Patrimônio Sólido</span>
                    </div>
                    <p className="text-xs text-gray-500">
                        A ferramenta ideal para aquisição planejada de imóveis e veículos.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consortiums;