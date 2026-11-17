import React from 'react';
import { appData } from '../data/appData';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Detektif({ onNext, onPrev }) {
  const { detektif } = appData.latihan;

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

      <h2 className="text-lg font-black text-white">Memperbaiki Instruksi Ambigu</h2>
      <div className="bg-rose-950/40 border border-rose-500/30 p-4 rounded-xl space-y-2">
        <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">Instruksi Ambigu/Tidak Jelas:</span>
        <p className="text-sm font-bold text-rose-200">"{detektif.awal}"</p>
        <p className="text-xs text-rose-300/80"><strong>Masalah:</strong> {detektif.masalah}</p>
      </div>

      <div className="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl space-y-2">
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Perbaikan Spesifik & Jelas:</span>
        <p className="text-xs text-emerald-200 leading-relaxed">"{detektif.solusiContoh}"</p>
      </div>

      <div className="flex justify-center items-center pt-4">
        <button onClick={onNext} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-md">
          Praktik Mandiri <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}