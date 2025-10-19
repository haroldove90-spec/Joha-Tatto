
import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { MailIcon } from './icons/MailIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl font-bold text-amber-400 mb-4 font-cinzel">Joha Tattoo</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-amber-400 transition-colors">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="mailto:contacto@johatattoo.com" aria-label="Email" className="hover:text-amber-400 transition-colors">
            <MailIcon className="w-6 h-6" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Joha Tattoo Studio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
