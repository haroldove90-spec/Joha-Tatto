
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="https://picsum.photos/id/237/400/500" 
              alt="Joha, la artista" 
              className="rounded-lg shadow-2xl object-cover h-[500px] w-[400px]"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Conoce a Joha</h2>
            <div className="w-24 h-1 bg-amber-400 mb-6"></div>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Hola, soy Joha. Mi pasión es transformar tus ideas en arte corporal. Con más de una década de experiencia, me especializo en crear tatuajes que no solo son estéticamente impactantes, sino que también tienen un significado profundo para quien los lleva.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mi estudio es un espacio seguro, inclusivo y profesional donde tu comodidad y la calidad del trabajo son mi máxima prioridad. Desde el diseño inicial hasta el cuidado posterior, te acompaño en cada paso del proceso para asegurar que tu experiencia sea inolvidable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
