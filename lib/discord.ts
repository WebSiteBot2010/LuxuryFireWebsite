import { Client, GatewayIntentBits } from "discord.js";

let client: Client | null = null;

export function initBot() {
  if (client) return client;

  client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers
    ]
  });

  client.login(process.env.DISCORD_BOT_TOKEN);
  return client;
}

export async function getBotStats() {
  if (!client) return { servers: 0, members: 0 };

  const servers = client.guilds.cache.size;
  let members = 0;

  client.guilds.cache.forEach(g => {
    members += g.memberCount;
  });

  return { servers, members };
}
