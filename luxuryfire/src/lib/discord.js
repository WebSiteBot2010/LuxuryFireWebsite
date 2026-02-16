import { Client, GatewayIntentBits } from "discord.js";

let client;

export function initBot() {
  if (client) return client;

  client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
  });

  if (process.env.DISCORD_BOT_TOKEN) {
    client.login(process.env.DISCORD_BOT_TOKEN);
  }

  return client;
}

export function getStats() {
  if (!client) return { servers: 0, members: 0 };

  const servers = client.guilds.cache.size;
  let members = 0;
  client.guilds.cache.forEach((g) => {
    members += g.memberCount;
  });

  return { servers, members };
}
