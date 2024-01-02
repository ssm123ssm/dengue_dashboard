/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    REDIRECT_URI: process.env.REDIRECT_URI,
    ISSUER: process.env.ISSUER,
    SCOPES: process.env.SCOPES,
  },
};

module.exports = nextConfig;
