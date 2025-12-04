import React from 'react';
import { FEATURES } from '../constants';
import { Icon } from './Icon';

const Features: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher a Kafir?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mais do que uma corretora, somos seus parceiros na proteção do seu patrimônio e bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="text-center group p-4 rounded-2xl hover:bg-emerald-50/50 transition-colors">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Icon name={feature.iconName} size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;