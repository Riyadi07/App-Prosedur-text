import React, { useState } from 'react';
import { appData } from '../data/appData';
import { ArrowRight, ArrowLeft, CheckCircle2, XCircle, RotateCcw, Check } from 'lucide-react';

export default function Susun({ onNext, onPrev }) {
  const [susunan, setSusunan] = useState(appData.latihan.susunLangkah);
  const [hasil, setHasil] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const moveItem = (fromIdx, toIdx) => {
    const updated = [...susunan];
    const [moved] = updated.splice(fromIdx, 1);
    updated.splice(toIdx, 0, moved);
    setSusunan(updated);
  };

  const cekUrutan = () => {
    const order = susunan.map(item => item.id);
    const isCorrect = JSON.stringify(order) === JSON.stringify(appData.latihan.kunciSusun);
    setHasil(isCorrect);
    setShowPopup(true);
  };

  const handleKerjakanUlang = () => {
    setSusunan(appData.latihan.susunLangkah); // Reset susunan ke posisi awal
    setHasil(null);
    setShowPopup(false);
  };

  const handleOk = () => {
    setShowPopup(false); // Tutup popup
  };

  return (
    <>
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
          <h2 className="text-lg font-black text-white">Susun Langkah Kerja Runtut</h2>
          <p className="text-xs text-slate-400 mt-1">Gunakan tombol panah untuk menyusun urutan logis ekspor PDF:</p>
        </div>

        <div className="space-y-2.5">
          {susunan.map((item, idx) => (
            <div key={item.id} className="flex items-center justify-between p-3.5 bg-slate-800 border border-slate-700 rounded-xl text-xs">
              <div className="flex items-center gap-3">
                <span className="font-bold text-emerald-400">{idx + 1}.</span>
                <span className="text-slate-200">{item.teks}</span>
              </div>
              <div className="flex gap-1 shrink-0">
                <button
                  disabled={idx === 0}
                  onClick={() => moveItem(idx, idx - 1)}
                  className="px-2 py-1 bg-slate-700 rounded text-[10px] font-bold disabled:opacity-30 hover:bg-slate-600"
                >
                  ▲
                </button>
                <button
                  disabled={idx === susunan.length - 1}
                  onClick={() => moveItem(idx, idx + 1)}
                  className="px-2 py-1 bg-slate-700 rounded text-[10px] font-bold disabled:opacity-30 hover:bg-slate-600"
                >
                  ▼
                </button>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={cekUrutan} 
          className="w-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg shadow-teal-500/20"
        >
          Periksa Urutan
        </button>

        <div className="flex justify-center items-center pt-4">
          <button onClick={onNext} className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1 shadow-md">
            Detektif Instruksi <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* POPUP MODAL HASIL PEMERIKSAAN */}
      {showPopup && hasil !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700/80 max-w-sm w-full p-6 rounded-3xl shadow-2xl text-center space-y-5 animate-in zoom-in-95 duration-200">
            
            {/* Ikon Status */}
            <div className="flex justify-center">
              {hasil ? (
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={36} />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <XCircle size={36} />
                </div>
              )}
            </div>

            {/* Pesan Hasil */}
            <div className="space-y-2">
              <h3 className={`text-lg font-black ${hasil ? 'text-emerald-400' : 'text-rose-400'}`}>
                {hasil ? 'Urutan Tepat!' : 'Belum Tepat'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {hasil
                  ? 'Selamat! Urutan langkah kerja ekspor PDF yang Anda susun sudah runtut dan logis.'
                  : 'Susunan langkah masih kurang sesuai. Periksa kembali alur dari tahap persiapan dokumen hingga memeriksa hasil akhir PDF.'}
              </p>
            </div>

            {/* Tombol Aksi Kondisional: Benar = hanya OK | Salah = Kerjakan Ulang */}
            <div className="pt-2">
              {hasil ? (
                <button
                  onClick={handleOk}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-black bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-md shadow-emerald-500/20"
                >
                  <Check size={15} /> OK
                </button>
              ) : (
                <button
                  onClick={handleKerjakanUlang}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-black bg-rose-500 hover:bg-rose-400 text-white transition-colors shadow-md shadow-rose-500/20"
                >
                  <RotateCcw size={15} /> Kerjakan Ulang
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}