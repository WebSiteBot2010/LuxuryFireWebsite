import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { initBot, getStats } from "@/lib/discord-server";

export default async function Home() {
  // Invece di fetch esterno, chiami direttamente la funzione server
  initBot();
  const data = getStats();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-5xl font-bold mb-6">LuxuryFire</h1>

      <div className="flex gap-10">
        <div className="bg-slate-800 p-6 rounded-xl text-center">
          <p className="text-3xl font-bold">{data.servers}</p>
          <p>Server Attivi</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl text-center">
          <p className="text-3xl font-bold">{data.members}</p>
          <p>Membri Protetti</p>
        </div>
      </div>

      <a
        href="/login"
        className="mt-10 bg-red-500 px-6 py-3 rounded-lg font-bold hover:bg-red-600"
      >
        Accedi con Discord
      </a>
    </main>
  );
}
