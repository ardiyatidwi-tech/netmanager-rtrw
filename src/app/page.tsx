'use client';
import { useState, useMemo } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-4">
      <div className="max-w-md mx-auto space-y-6 pt-10">
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 bg-blue-600/10 rounded-xl border border-blue-500/20 text-blue-500">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-wider">NETMANAGER</h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest">Oriya Gunung Guruh Official</p>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 space-y-6 backdrop-blur-sm">
          <div className="text-center space-y-1">
            <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              Secure Access
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Pilih Akun Petugas</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-blue-500 transition-colors">
                <option>-- Pilih Petugas --</option>
                <option>Bendahara</option>
                <option>Kolektor</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/10">
              Masuk ke Dashboard
            </button>
          </div>

          <div className="text-center pt-2">
            <span className="text-[10px] text-slate-600 uppercase tracking-widest font-medium">By Kimet</span>
          </div>
        </div>
      </div>
    </div>
  );
}
