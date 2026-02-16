export async function isStaff(userId) {
  const res = await fetch(
    `https://discord.com/api/guilds/${process.env.GUILD_ID}/members/${userId}`,
    { headers: { Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}` } }
  );
  if (!res.ok) return false;
  const member = await res.json();
  return member.roles.includes(process.env.STAFF_ROLE_ID);
}
