import React from 'react';
import { NAV_LINKS } from '../constants';
import { Icon } from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <Icon name="ShieldAlert" size={24} />
              </div>
              <span className="text-2xl font-bold">Kafir</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Desde 2010 oferecendo consultoria de seguros especializada e humanizada. Sua segurança é o nosso compromisso.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-emerald-500 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <li><a href="#" className="hover:text-emerald-500 transition-colors text-sm">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon name="Map" size={18} className="text-emerald-500 mt-1" />
                <span className="text-sm">Rua Exemplo, 1000 - Sala 10<br/>São Paulo, SP - CEP 00000-000</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" size={18} className="text-emerald-500" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" size={18} className="text-emerald-500" />
                <span className="text-sm">contato@kafirseguros.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Optional as requested) */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Receba novidades e dicas sobre proteção patrimonial.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm w-full border border-gray-700 focus:border-emerald-500 focus:outline-none"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kafir Corretora de Seguros. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;