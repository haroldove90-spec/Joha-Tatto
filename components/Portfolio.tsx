
import React from 'react';

const portfolioImages = [
  '1011', '102', '1025', '103', '1048', '1062', '1074', '1084', '219'
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Mi Trabajo</h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioImages.map((id, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={`https://picsum.photos/id/${id}/500/500`} 
                alt={`Tattoo example ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
