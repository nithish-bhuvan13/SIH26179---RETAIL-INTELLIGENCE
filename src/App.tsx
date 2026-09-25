import React from 'react';
import { Navigation } from './components/sections/Navigation';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Architecture } from './components/sections/Architecture';
import { Innovation } from './components/sections/Innovation';
import { Demo } from './components/sections/Demo';
import { Technical } from './components/sections/Technical';
import { Feasibility } from './components/sections/Feasibility';
import { Impact } from './components/sections/Impact';
import { Research } from './components/sections/Research';
import { Team } from './components/sections/Team';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-body selection:bg-teal-300 selection:text-ink">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Architecture />
        <Innovation />
        <Demo />
        <Technical />
        <Feasibility />
        <Impact />
        <Research />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;
