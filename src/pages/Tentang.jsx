import React from 'react';
import { appData } from '../data/appData';
import { ArrowRight, ArrowLeft, CheckCircle2, HelpCircle } from 'lucide-react';

export default function Tentang({ onNext, onPrev }) {
  const { materi } = appData;

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

      <div className="bg-amber-950/40 border border-amber-500/30 p-5 rounded-2xl flex flex-col sm:flex-row gap-4 items-start">
        <HelpCircle className="text-amber-400 shrink-0 mt-0.5" size={28} />
        <div className="space-y-1.5">
          <h3 className="text-sm md:text-base font-extrabold text-amber-200">
            "Mengapa berkas tugas perlu disimpan dengan format dan nama yang tepat?"
          </h3>
          <p className="text-xs text-amber-300/80 leading-relaxed">
            Jika semua berkas bernama "Dokumen Baru", file akan mudah tertukar dan berantakan. Format PDF memastikan tata letak dokumen tetap rapi di perangkat manapun!
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-black text-white">Mengenal Teks Prosedur</h2>
      </div>
      <p className="text-xs md:text-sm text-slate-300 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 leading-relaxed">
        {materi.pengertian}
      </p>

      <div className="space-y-3">
        <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
          Struktur Teks Prosedur:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {materi.struktur.map((st, i) => (
            <div key={i} className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700">
              <h4 className="font-bold text-xs text-emerald-300">{st.nama}</h4>
              <p className="text-[11px] text-slate-400 mt-1">{st.ket}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
          Ciri Kebahasaan:
        </h3>
        <div className="space-y-2">
          {materi.ciriBahasa.map((cb, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>{cb}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center pt-4">
        <button onClick={onNext} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-md">
          Lihat Contoh Prosedur <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}