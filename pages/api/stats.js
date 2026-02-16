export default async function handler(req, res) {
  const client = global.discordClient; // client condiviso

  if (!client) {
    return res.status(200).json({
      servers: 0,
      members: 0
    });
  }

  const servers = client.guilds.cache.size;

  let members = 0;
  client.guilds.cache.forEach(guild => {
    members += guild.memberCount;
  });

  res.status(200).json({
    servers: servers || 0,
    members: members || 0
  });
}
