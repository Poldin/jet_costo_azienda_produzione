"use client";
import React, { useState, useMemo } from 'react';
import { Info, Users, Clock, Zap, ArrowRight } from 'lucide-react';

export default function ManufacturingCalculator() {
  // INPUTS OPERATIVI
  const [numEmployees, setNumEmployees] = useState(5);
  const [hoursPerEmployee, setHoursPerEmployee] = useState(8);
  const [level, setLevel] = useState('C3'); // Livello Metalmeccanico standard

  // Costanti CCNL Metalmeccanico (stime basate su medie di settore)
  const hourlyRates: Record<string, number> = {
    'D1': 13.5,
    'C3': 16.2,
    'B1': 19.8
  };

  const stats = useMemo(() => {
    const baseRate = hourlyRates[level];
    const overtimeMarkup = 1.25; // +25% straordinario standard
    const inpsInailTfrFactor = 1.32; // +32% di cuneo aziendale incrementale

    const totalLordoBusta = numEmployees * hoursPerEmployee * baseRate * overtimeMarkup;
    const totalCostoAzienda = totalLordoBusta * inpsInailTfrFactor;
    const cuneoFiscale = totalCostoAzienda - totalLordoBusta;

    return {
      totalLordoBusta,
      totalCostoAzienda,
      cuneoFiscale,
      welfarePotential: cuneoFiscale * 0.8 // Stima risparmio con Welfare
    };
  }, [numEmployees, hoursPerEmployee, level]);

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-[600px] font-sans antialiased text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100 rounded-3xl overflow-hidden shadow-xl">
        
        {/* LEFT: INPUTS (Control Panel) */}
        <div className="p-10 bg-gray-50 border-r border-gray-100">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-6 bg-black rounded-full"></div>
            <h2 className="text-sm font-bold uppercase tracking-widest">Configuratore Turno</h2>
          </div>

          <div className="space-y-10">
            {/* Selettore Livello */}
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-4">Livello CCNL Metalmeccanico</label>
              <div className="flex gap-2">
                {Object.keys(hourlyRates).map((l) => (
                  <button 
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all border-2 ${level === l ? 'border-black bg-black text-white' : 'border-gray-200 bg-white text-gray-400 hover:border-gray-300'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Dipendenti */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-xs font-bold text-gray-400 uppercase flex items-center gap-2">
                  <Users size={14} /> Dipendenti Coinvolti
                </label>
                <span className="font-bold">{numEmployees}</span>
              </div>
              <input 
                type="range" min="1" max="50" value={numEmployees} 
                onChange={(e) => setNumEmployees(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 appearance-none cursor-pointer accent-black"
              />
            </div>

            {/* Slider Ore */}
            <div>
              <div className="flex justify-between mb-4">
                <label className="text-xs font-bold text-gray-400 uppercase flex items-center gap-2">
                  <Clock size={14} /> Ore Extra per Dipendente
                </label>
                <span className="font-bold">{hoursPerEmployee}h</span>
              </div>
              <input 
                type="range" min="1" max="12" value={hoursPerEmployee} 
                onChange={(e) => setHoursPerEmployee(Number(e.target.value))}
                className="w-full h-1 bg-gray-200 appearance-none cursor-pointer accent-black"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: OUTPUT (The Truth) */}
        <div className="p-10 flex flex-col justify-between bg-white">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Costo Azienda Totale (Stimato)</p>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-black tracking-tighter">€{Math.round(stats.totalCostoAzienda).toLocaleString()}</span>
            </div>
            
            <div className="mt-12 space-y-4">
              <div className="flex justify-between py-4 border-b border-gray-50">
                <span className="text-gray-500">Lordo in Busta Paga (Totale)</span>
                <span className="font-bold">€{Math.round(stats.totalLordoBusta).toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-50 text-red-500">
                <span className="">Cuneo Fiscale/Contributivo</span>
                <span className="font-bold">+€{Math.round(stats.cuneoFiscale).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* JET HR GROWTH HOOK */}
          <div className="mt-12 p-6 bg-[#F0F7FF] rounded-2xl border border-[#D0E5FF]">
            <div className="flex items-center gap-2 text-[#0066FF] mb-2">
              <Zap size={18} fill="currentColor" />
              <span className="font-bold text-sm tracking-tight text-[#004BB3]">Ottimizzazione Jet HR</span>
            </div>
            <p className="text-sm text-[#004BB3] leading-relaxed mb-4">
              Puoi risparmiare fino a <strong>€{Math.round(stats.welfarePotential)}</strong> su questo turno convertendo il costo in Welfare Aziendale.
            </p>
            <button className="w-full bg-[#0066FF] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#0052CC] transition-all">
              Vedi breakdown dettagliato <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
