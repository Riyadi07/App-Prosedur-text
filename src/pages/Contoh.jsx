import React from 'react';
import { appData } from '../data/appData';
import { ArrowRight, ArrowLeft, Laptop } from 'lucide-react';

export default function Contoh({ onNext, onPrev }) {
  const { contoh } = appData.materi;

  return (
    <div className="bg-slate-900/90 border border-slate-800 p-6 md:p-8 rounded-3xl shadow-xl space-y-6 text-slate-200">
      <div>
        <button
          onClick={onPrev}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft size={16} /> Kembali
        </button>
      </div>

      <div>
        <h2 className="text-lg md:text-xl font-black text-white">{contoh.judul}</h2>
        <p className="text-xs text-slate-400 mt-1 border-l-2 border-emerald-500 pl-3 leading-relaxed">
          {contoh.tujuan}
        </p>
      </div>

      <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
        <h3 className="text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
          <Laptop size={16} /> Alat & Prasyarat:
        </h3>
        <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
          {contoh.prasyarat.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>

     <div className="space-y-3">
  <div className="flex items-center justify-between">
    <h3 className="text-xs font-bold text-emerald-400 uppercase">
      Langkah-Langkah Kerja:
    </h3>
    {contoh.langkahLangkah.length > 5 && (
      <span className="text-[10px] text-slate-400 italic">
        Scroll ke bawah untuk langkah selanjutnya ({contoh.langkahLangkah.length} langkah)
      </span>
    )}
  </div>

  {/* Kontainer dengan tinggi maksimal 5 item dan bisa di-scroll */}
<div className="space-y-2 max-h-[290px] overflow-y-auto no-scrollbar">
  {contoh.langkahLangkah.map((lg, i) => (
    <div
      key={i}
      className="flex gap-3 items-start p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs"
    >
      <span className="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-[10px]">
        {i + 1}
      </span>
      <p className="leading-relaxed text-slate-200">{lg}</p>
    </div>
  ))}
</div>
</div>

      <div className="flex justify-center items-center pt-4">
        <button onClick={onNext} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-md">
          Latihan Susun Langkah <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}