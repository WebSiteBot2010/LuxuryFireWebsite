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
    <div>
      <h1>LuxuryFire</h1>
      <p>Server: {stats.servers}</p>
      <p>Membri: {stats.members}</p>
    </div>
  );
}
