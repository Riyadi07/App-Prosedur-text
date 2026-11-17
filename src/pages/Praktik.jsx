import React, { useState } from 'react';
import { appData } from '../data/appData';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Praktik({ onNext, onPrev }) {
  const [checked, setChecked] = useState({});

  const toggleCheck = (idx) => {
    setChecked({ ...checked, [idx]: !checked[idx] });
  };

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
        <h2 className="text-lg font-black text-white">Pemeriksaan Hasil Praktik</h2>
        <p className="text-xs text-slate-400 mt-1">Centang daftar cek di bawah ini setelah mencoba ekspor PDF di komputer:</p>
      </div>

      <div className="space-y-3">
        {appData.materi.contoh.pemeriksaanHasil.map((item, idx) => (
          <label key={idx} className="flex items-center gap-3 p-3.5 bg-slate-800 rounded-xl border border-slate-700 text-xs cursor-pointer hover:bg-slate-750">
            <input
              type="checkbox"
              checked={!!checked[idx]}
              onChange={() => toggleCheck(idx)}
              className="w-4 h-4 text-emerald-500 rounded bg-slate-900 border-slate-600 focus:ring-0"
            />
            <span className={checked[idx] ? 'line-through text-slate-500' : 'text-slate-200'}>
              {item}
            </span>
          </label>
        ))}
      </div>

      <div className="flex justify-center items-center pt-4">
        <button onClick={onNext} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-md">
          Uji Kuis Evaluasi <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}