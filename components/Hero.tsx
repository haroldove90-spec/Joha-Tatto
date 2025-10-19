
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="text-center z-10 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-wide">
          Arte que perdura en tu piel
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto">
          Diseños únicos y personalizados que cuentan tu historia.
        </p>
        <a 
          href="#contact" 
          className="mt-8 inline-block bg-amber-400 text-black font-bold py-3 px-8 rounded-sm text-lg uppercase tracking-wider hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
        >
          Agenda tu Cita
        </a>
      </div>
    </section>
  );
};

export default Hero;
