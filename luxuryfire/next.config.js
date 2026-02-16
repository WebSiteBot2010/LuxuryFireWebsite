/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["discord.js", "@discordjs/ws"],
  },
  turbopack: {
    // Forza root per evitare warning lockfile
    root: __dirname,
  },
};

module.exports = nextConfig;
