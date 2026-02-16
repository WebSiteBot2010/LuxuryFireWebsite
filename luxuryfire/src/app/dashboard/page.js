'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [stats, setStats] = useState({ servers: 0, members: 0 });

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {});
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p>Server: {stats.servers}</p>
      <p>Membri: {stats.members}</p>
    </main>
  );
}
