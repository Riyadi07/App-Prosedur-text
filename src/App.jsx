import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import Contoh from './pages/Contoh';
import Susun from './pages/Susun';
import Detektif from './pages/Detektif';
import Praktik from './pages/Praktik';
import Kuis from './pages/Kuis';
import bgSketsa from './assets/bg-sketsa.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans antialiased flex flex-col justify-between overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.12] invert contrast-120 mix-blend-screen bg-repeat bg-center bg-[length:280px] sm:bg-[length:360px] md:bg-[length:440px]"
        style={{
          backgroundImage: `url(${bgSketsa})`,
        }}
      />

      <div className="relative z-10 flex-grow">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="max-w-4xl mx-auto px-4 py-6 md:py-10">
          {activeTab === 1 && <Beranda onNext={() => setActiveTab(4)} />}
          {activeTab === 3 && <Tentang onNext={() => setActiveTab(4)} onPrev={() => setActiveTab(1)} />}
          {activeTab === 4 && <Contoh onNext={() => setActiveTab(5)} onPrev={() => setActiveTab(1)} />}
          {activeTab === 5 && <Susun onNext={() => setActiveTab(6)} onPrev={() => setActiveTab(4)} />}
          {activeTab === 6 && <Detektif onNext={() => setActiveTab(7)} onPrev={() => setActiveTab(5)} />}
          {activeTab === 7 && <Praktik onNext={() => setActiveTab(8)} onPrev={() => setActiveTab(6)} />}
          {activeTab === 8 && <Kuis onPrev={() => setActiveTab(7)} onHome={() => setActiveTab(1)} />}
        </main>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}