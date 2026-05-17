import GrowthCalculator from './components/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Opzionale: Una mini-navbar per fare scena al colloquio */}
      <nav className="bg-white border-b border-gray-100 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl tracking-tight">Jet<span className="text-gray-400">Builder</span></span>
          <div className="text-xs bg-black text-white px-2 py-1 rounded uppercase tracking-widest font-bold">
            Growth Tool
          </div>
        </div>
      </nav>

      {/* Hero Section per contestualizzare il tool */}
      <section className="pt-16 pb-8 text-center px-4">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
          Manufacturing Efficiency
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Simulatore Costo Turni e Straordinari
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Calcola l'impatto reale sulla produzione in 10 secondi. <br/>
          Ottimizzato per il <strong>CCNL Metalmeccanico</strong>.
        </p>
      </section>

      {/* Il tuo componente */}
      <section className="pb-20">
        <GrowthCalculator />
      </section>
      
      {/* Footer per la conversione */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center">
        <p className="text-gray-400 text-sm">
          Ti serve un calcolo preciso al centesimo sui tuoi dipendenti reali?
        </p>
        <button className="mt-4 text-black font-bold underline underline-offset-4 hover:text-gray-600 transition-colors">
          Scopri come Jet HR automatizza tutto questo
        </button>
      </footer>
    </main>
  );
}
