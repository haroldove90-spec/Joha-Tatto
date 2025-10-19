
import React, { useState } from 'react';
import { generateTattooIdea } from '../services/geminiService';
import { TattooIdea } from '../types';

const StyleGuide: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [idea, setIdea] = useState<TattooIdea | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGenerate = async () => {
    if (!prompt) {
      setError('Por favor, describe tu idea.');
      return;
    }
    setIsLoading(true);
    setError('');
    setIdea(null);
    try {
      const result = await generateTattooIdea(prompt);
      setIdea(result);
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error inesperado.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const IdeaResult: React.FC<{ idea: TattooIdea }> = ({ idea }) => (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-amber-400/30 animate-fade-in">
      <div>
        <h4 className="text-xl font-bold text-amber-400 mb-2">Descripción Artística</h4>
        <p className="text-gray-300">{idea.description}</p>
      </div>
      <div className="mt-6">
        <h4 className="text-xl font-bold text-amber-400 mb-2">Análisis de Estilo</h4>
        <p className="text-gray-300">{idea.styleAnalysis}</p>
      </div>
      <div className="mt-6">
        <h4 className="text-xl font-bold text-amber-400 mb-2">Ubicaciones Sugeridas</h4>
        <ul className="space-y-4">
          {idea.placements.map((p, index) => (
            <li key={index} className="p-4 bg-gray-900 rounded">
              <p className="font-semibold text-white">{p.name}</p>
              <p className="text-gray-400 text-sm">{p.reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  const Loader: React.FC = () => (
     <div className="flex flex-col items-center justify-center mt-8">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-amber-400"></div>
        <p className="mt-4 text-amber-400">Creando tu concepto...</p>
      </div>
  );

  return (
    <section id="style-guide" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-white mb-4">Guía de Estilos con IA</h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
        <p className="text-gray-300 mb-8 text-lg">
          ¿No estás seguro de cómo plasmar tu idea? Descríbela abajo y deja que nuestra IA te ayude a visualizar el concepto, el estilo y las mejores ubicaciones.
        </p>

        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ej: un lobo aullando a la luna en estilo geométrico"
            className="flex-grow bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            disabled={isLoading}
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="bg-amber-400 text-black font-bold py-3 px-8 rounded-sm text-lg uppercase tracking-wider hover:bg-amber-500 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Generando...' : 'Generar Idea'}
          </button>
        </div>
        
        {error && <p className="mt-4 text-red-400">{error}</p>}
        {isLoading && <Loader />}
        {idea && <IdeaResult idea={idea} />}
      </div>
    </section>
  );
};

export default StyleGuide;
