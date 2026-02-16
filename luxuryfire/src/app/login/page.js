'use client';

export default function Login() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <a
        href="/api/auth/discord"
        className="bg-blue-500 px-6 py-3 rounded text-white hover:bg-blue-600"
      >
        Accedi con Discord
      </a>
    </main>
  );
}
