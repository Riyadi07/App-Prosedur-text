import React, { useState } from 'react';
import { appData } from '../data/appData';
import { ArrowLeft, Trophy, RotateCcw, Check, AlertCircle } from 'lucide-react';

export default function Kuis({ onPrev }) {
  const [jawaban, setJawaban] = useState({});
  const [skor, setSkor] = useState(null);
  const [jumlahBenar, setJumlahBenar] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const hitungSkor = () => {
    let benar = 0;
    appData.kuis.forEach((q) => {
      if (jawaban[q.id] === q.jawabanBenar) benar += 1;
    });
    const nilaiAkhir = Math.round((benar / appData.kuis.length) * 100);
    setJumlahBenar(benar);
    setSkor(nilaiAkhir);
    setShowPopup(true);
  };

  const handleUlangiKuis = () => {
    setJawaban({});
    setSkor(null);
    setJumlahBenar(0);
    setShowPopup(false);
  };

  const handleOk = () => {
    setShowPopup(false);
  };
  const isLulus = skor !== null && skor >= 100;

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
          <h2 className="text-lg font-black text-white">Kuis Evaluasi Digital</h2>
          <p className="text-xs text-slate-400 mt-1">
            Pilih jawaban yang paling tepat untuk setiap pertanyaan di bawah ini:
          </p>
        </div>

        <div className="space-y-4">
          {appData.kuis.map((q, idx) => (
            <div key={q.id} className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
              <p className="text-xs font-bold text-white">{idx + 1}. {q.soal}</p>
              <div className="space-y-2">
                {q.pilihan.map((p, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => setJawaban({ ...jawaban, [q.id]: pIdx })}
                    className={`w-full text-left text-xs p-3 rounded-xl border transition-all ${jawaban[q.id] === pIdx
                        ? 'bg-emerald-500 text-slate-950 border-emerald-500 font-bold'
                        : 'bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={hitungSkor}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-colors"
        >
          Hitung Skor Akhir
        </button>
      </div>

      {showPopup && skor !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700/80 max-w-sm w-full p-6 rounded-3xl shadow-2xl text-center space-y-5 animate-in zoom-in-95 duration-200">

            <div className="flex justify-center">
              {isLulus ? (
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Trophy size={34} />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <AlertCircle size={34} />
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {isLulus ? 'Evaluasi Berhasil!' : 'Perlu Latihan Lagi'}
              </span>
              <p className={`text-5xl font-black ${isLulus ? 'text-emerald-400' : 'text-rose-400'}`}>
                {skor} <span className="text-lg text-slate-500 font-bold">/ 100</span>
              </p>
              <p className="text-xs text-slate-300 pt-1">
                Benar <span className="font-bold text-white">{jumlahBenar}</span> dari <span className="font-bold text-white">{appData.kuis.length}</span> soal.
              </p>
              <p className="text-xs text-slate-300/90 leading-relaxed pt-1">
                {isLulus
                  ? 'Hebat! Anda telah menguasai materi pembuatan dan penyimpanan dokumen PDF dengan sangat baik.'
                  : 'Masih ada jawaban yang kurang tepat. Silakan periksa kembali materi dan ulangi kuis untuk memperbaiki nilai Anda.'}
              </p>
            </div>

            <div className="pt-2">
              {isLulus ? (
                <button
                  onClick={handleOk}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-black bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors shadow-md shadow-emerald-500/20"
                >
                  <Check size={15} /> OK
                </button>
              ) : (
                <button
                  onClick={handleUlangiKuis}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-black bg-rose-500 hover:bg-rose-400 text-white transition-colors shadow-md shadow-rose-500/20"
                >
                  <RotateCcw size={15} /> Ulangi Kuis
                </button>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}