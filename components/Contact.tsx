
import React from 'react';
import { MailIcon } from './icons/MailIcon';
import { InstagramIcon } from './icons/InstagramIcon';


const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Hagamos Arte</h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          ¿Listo para empezar tu próximo tatuaje? Contáctame para agendar una consulta. Podemos hablar sobre tu diseño, resolver tus dudas y planificar tu sesión.
        </p>
        
        <div className="flex justify-center items-center space-x-8 mb-8">
          <a href="mailto:contacto@johatattoo.com" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors">
            <MailIcon className="w-8 h-8" />
            <span className="text-lg">contacto@johatattoo.com</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors">
            <InstagramIcon className="w-8 h-8" />
            <span className="text-lg">@JohaTattoo</span>
          </a>
        </div>

        <a 
          href="mailto:contacto@johatattoo.com" 
          className="mt-4 inline-block bg-amber-400 text-black font-bold py-3 px-8 rounded-sm text-lg uppercase tracking-wider hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
        >
          Enviar un Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
