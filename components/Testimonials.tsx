import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Icon } from './Icon';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que dizem nossos clientes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação de quem já conta com a proteção e a consultoria da Kafir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="text-emerald-400 mb-6">
                <Icon name="Quote" size={40} className="fill-current" />
              </div>
              <p className="text-gray-600 italic mb-8 flex-grow">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                    src={testimonial.avatarUrl} 
                    alt={testimonial.name}
                    loading="lazy"
                    width="48"
                    height="48"
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-100"
                />
                <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <span className="text-xs text-emerald-600 font-medium uppercase tracking-wide">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;