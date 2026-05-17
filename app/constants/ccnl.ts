export const CCNL_DATA = {
    metalmeccanico: {
      name: "Metalmeccanico Industria",
      levels: [
        { id: "D1", label: "Livello D1 (Operario)", minRal: 22000 },
        { id: "C3", label: "Livello C3 (Specializzato)", minRal: 28000 },
        { id: "B1", label: "Livello B1 (Impiegato/Quadro)", minRal: 35000 },
      ],
      overtimeMarkup: 0.25, // +25% per le prime 2 ore
      inpsRate: 0.30,      // Contributi azienda stimati
      tfrRate: 0.074,      // Accantonamento TFR
    }
  };
  
  export type CcnlKey = keyof typeof CCNL_DATA;
  