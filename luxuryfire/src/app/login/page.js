export default function Login() {
  const url = `https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${process.env.DISCORD_REDIRECT_URI}&response_type=code&scope=identify guilds`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <h1 className="text-4xl mb-6">Accedi a LuxuryFire</h1>
      <a
        href={url}
        className="bg-red-500 px-6 py-3 rounded-lg font-bold hover:bg-red-600"
      >
        Login con Discord
      </a>
    </div>
  );
}
