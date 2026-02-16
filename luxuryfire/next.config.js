/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["discord.js", "@discordjs/ws"],
  },
};

module.exports = nextConfig;
