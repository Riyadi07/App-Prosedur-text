import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
    const [isOpen, setIsOpen] = useState(false);

    const listLayar = [
        { num: 1, label: 'Beranda' },
        // { num: 2, label: 'Pemantik' },
        { num: 4, label: 'Contoh Prosedur' },
        { num: 5, label: 'Latihan Interaktif' },
        { num: 6, label: 'Praktik Mandiri' },
        { num: 7, label: 'Evaluasi & Kuis' },
        { num: 3, label: 'Tentang' },
    ];

    const handleSelectTab = (num) => {
        setActiveTab(num);
        setIsOpen(false);
    };

    return (
        <>
            <header className="bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg border-b border-slate-800">
                <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">

                    {/* Nama aplikasi */}
                    <div className="leading-[1.05]">
                        <div className="flex items-baseline gap-2 select-none whitespace-nowrap">
                            <span className="text-lg font-black uppercase tracking-[-0.02em] text-white sm:text-xl">
                                Dokumen
                            </span>
                            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text pb-0.5 pr-0.5 text-lg font-black uppercase tracking-[-0.02em] text-transparent sm:text-xl">
                                Siap!
                            </span>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation (Layar Lebar) */}
                    <nav className="hidden lg:flex items-center gap-1.5">
                        {listLayar.map((item) => (
                            <button
                                key={item.num}
                                onClick={() => handleSelectTab(item.num)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${activeTab === item.num
                                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 scale-105'
                                    : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Tombol Burger Menu (Mobile & Tablet) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700/60 focus:outline-none"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile & Tablet Dropdown Menu Panel (Turun ke bawah secara vertikal) */}
                {isOpen && (
                    <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-2xl relative z-50">

                        {/* List Menu Vertikal (Ke Bawah) Tanpa Nomor */}
                        <div className="flex flex-col space-y-1.5">
                            {listLayar.map((item) => (
                                <button
                                    key={item.num}
                                    onClick={() => handleSelectTab(item.num)}
                                    className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold transition-all text-left ${activeTab === item.num
                                        ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                                        : 'bg-slate-800/80 text-slate-200 hover:bg-slate-700 hover:text-white'
                                        }`}
                                >
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-200"
                />
            )}
        </>
    );
}