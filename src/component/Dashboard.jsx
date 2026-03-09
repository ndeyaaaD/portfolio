import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Données fictives pour le graphique
const data = [
  { name: '00:00', prix: 41000 },
  { name: '04:00', prix: 42500 },
  { name: '08:00', prix: 41800 },
  { name: '12:00', prix: 43200 },
  { name: '16:00', prix: 42900 },
  { name: '20:00', prix: 44000 },
  { name: '23:59', prix: 43500 },
];

const Dashboard = () => {
  const [periode, setPeriode] = useState('24H');
  const periodes = ['1H', '24H', '7D', '1M', '1Y'];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8 font-sans">

      {/* --- HEADER --- */}
      <header className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Analyse du Marché</h1>
          <p className="text-slate-400 mt-1">Bienvenue sur votre terminal de trading personnel.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-sm font-medium text-slate-300">Live Market Data</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* --- CARTES DE STATS RAPIDES --- */}
        <StatCard title="Bitcoin" symbol="BTC" price="$43,500" change="+4.2%" isUp={true} />
        <StatCard title="Ethereum" symbol="ETH" price="$2,280" change="-1.5%" isUp={false} />
        <StatCard title="Solana" symbol="SOL" price="$98.45" change="+12.8%" isUp={true} />

        {/* --- SECTION GRAPHIQUE (BENTO LARGE) --- */}
        <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 p-6 rounded-3xl backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h3 className="text-xl font-bold text-white">Évolution du prix (BTC)</h3>

            {/* Sélecteur de période interactif */}
            <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
              {periodes.map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriode(p)}
                  className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    periode === p
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Graphique Réel avec Recharts */}
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPrix" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                  itemStyle={{ color: '#3b82f6' }}
                />
                <Area
                  type="monotone"
                  dataKey="prix"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorPrix)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- LISTE DES FAVORIS --- */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl backdrop-blur-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Favoris</h3>
            <button className="text-blue-400 text-sm hover:underline">Voir tout</button>
          </div>
          <div className="space-y-2">
            <FavoriItem name="Cardano" symbol="ADA" price="$0.58" change="+2.1%" isUp={true} />
            <FavoriItem name="Polkadot" symbol="DOT" price="$7.24" change="-0.4%" isUp={false} />
            <FavoriItem name="Chainlink" symbol="LINK" price="$18.10" change="+5.7%" isUp={true} />
            <FavoriItem name="Avalanche" symbol="AVAX" price="$36.40" change="-3.2%" isUp={false} />
          </div>
        </div>

      </main>
    </div>
  );
};

/* --- SOUS-COMPOSANTS POUR LA PROPRETÉ --- */

const StatCard = ({ title, symbol, price, change, isUp }) => (
  <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:border-blue-500/50 transition-all group">
    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{title} ({symbol})</p>
    <div className="flex items-center justify-between mt-3">
      <h4 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">{price}</h4>
      <span className={`px-2 py-1 rounded-lg text-xs font-bold ${isUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
        {change}
      </span>
    </div>
  </div>
);

const FavoriItem = ({ name, symbol, price, change, isUp }) => (
  <div className="flex items-center justify-between p-3 hover:bg-slate-800/40 rounded-2xl transition-all cursor-pointer group">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 bg-slate-800 rounded-xl flex items-center justify-center font-bold text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {symbol[0]}
      </div>
      <div>
        <p className="text-sm font-bold text-white">{name}</p>
        <p className="text-[10px] text-slate-500 font-mono uppercase">{symbol}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-bold text-white">{price}</p>
      <p className={`text-[10px] font-bold ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>{change}</p>
    </div>
  </div>
);

export default Dashboard;