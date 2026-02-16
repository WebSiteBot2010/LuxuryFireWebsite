'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [stats, setStats] = useState({ servers: 0, members: 0 });

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {});
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">LuxuryFire</h1>

      <div className="flex gap-10">
        <div className="bg-gray-800 p-6 rounded text-center">
          <p className="text-2xl font-bold">{stats.servers}</p>
          <p>Server Attivi</p>
        </div>

        <div className="bg-gray-800 p-6 rounded text-center">
          <p className="text-2xl font-bold">{stats.members}</p>
          <p>Membri Protetti</p>
        </div>
      </div>

      <a
        href="/login"
        className="mt-10 inline-block bg-red-500 px-6 py-3 rounded text-white font-bold hover:bg-red-600"
      >
        Accedi con Discord
      </a>
    </main>
  );
}
