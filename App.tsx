
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import StyleGuide from './components/StyleGuide';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-gray-200 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <StyleGuide />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
