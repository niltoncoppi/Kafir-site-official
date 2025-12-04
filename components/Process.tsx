import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { Icon } from './Icon';

const Process: React.FC = () => {
  return (
    <section id="processo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Simplificamos o caminho entre você e a sua proteção ideal em 4 passos simples.
          </p>
        </div>

        <div className="relative">
            {/* Connecting line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-full transform z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center bg-white p-4">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-200 relative">
                        <Icon name={step.iconName} size={28} />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                            {index + 1}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">
                        {step.description}
                    </p>
                </div>
            ))}
            </div>
        </div>
        
        <div className="mt-12 text-center">
             <a 
                href="#contato"
                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
             >
                Solicitar minha cotação <Icon name="ArrowRight" size={20} />
             </a>
        </div>
      </div>
    </section>
  );
};

export default Process;