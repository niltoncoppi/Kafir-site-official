import React from 'react';
import { Icon } from './Icon';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100/50">
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <Icon name="Award" size={14} />
          Fundada em 2010
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Proteja o que é mais importante.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
            Consultoria em seguros sob medida
          </span><br/>
          para sua empresa e sua família.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Nossa equipe especializada pesquisa as melhores seguradoras para você, com rapidez, transparência e atendimento humanizado.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contato" 
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-emerald-200/50 transition-all transform hover:-translate-y-1"
          >
            Solicitar cotação agora
          </a>
          <a 
            href="#produtos" 
            className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-700 hover:text-emerald-600 hover:border-emerald-200 rounded-full font-semibold text-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
          >
            Conhecer Produtos
            <Icon name="ChevronDown" size={20} />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-gray-500 text-sm md:text-base">
            <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-emerald-500" size={18} />
                <span>Cotação Rápida</span>
            </div>
            <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-emerald-500" size={18} />
                <span>Atendimento Humano</span>
            </div>
            <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-emerald-500" size={18} />
                <span>Melhores Seguradoras</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;