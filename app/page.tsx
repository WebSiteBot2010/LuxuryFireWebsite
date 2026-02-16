export default function Login() {
  const url = `https://discord.com/api/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&redirect_uri=${process.env.DISCORD_REDIRECT_URI}&response_type=code&scope=identify guilds`;

  return (
    <div>
      <h1>Accedi a LuxuryFire</h1>
      <a href={url}>Login con Discord</a>
    </div>
  );
}
