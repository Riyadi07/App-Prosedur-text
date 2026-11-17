import React from 'react';
import { ArrowRight, BookOpen, Sparkles, CheckCircle } from 'lucide-react';
import logopdf from '../assets/logopdf1.png';

export default function Beranda({ onNext }) {
  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-950 text-white p-6 md:p-10 rounded-3xl border border-teal-800/50 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="order-1 md:order-2 shrink-0 flex items-center justify-center">
            <img
              src={logopdf}
              alt="Logo Dokumen Siap PDF"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain invert contrast-200 mix-blend-screen"
            />
          </div>

          <div className="order-2 md:order-1 space-y-3 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Sparkles size={14} /> Media Pembelajaran Teks Prosedur SMK
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              DOKUMEN SIAP!
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed">
              Tutorial Interaktif Membuat dan Menyimpan Dokumen PDF secara Efektif, Runtut, dan Profesional.
            </p>
          </div>

        </div>
      </div>

      {/* Tujuan Pembelajaran */}
      <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl shadow-lg text-slate-200">
        <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <BookOpen size={18} /> Tujuan Pembelajaran:
        </h2>
        <ul className="space-y-2 text-xs md:text-sm text-slate-300">
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span>Menjelaskan tujuan, struktur, dan ciri kebahasaan teks prosedur.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span>Mengidentifikasi contoh prosedur digital dan menyusun langkah kerja runtut.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <span>Memperbaiki instruksi ambigu serta mempraktikkan ekspor PDF dengan daftar cek.</span>
          </li>
        </ul>
      </div>

      <button
        onClick={onNext}
        className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
      >
        Mulai Pembelajaran <ArrowRight size={18} />
      </button>
    </div>
  );
}