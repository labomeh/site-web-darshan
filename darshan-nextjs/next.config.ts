import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Configuration pour génération statique (SSG)
  output: 'export',

  // Désactiver l'optimisation des images pour l'export statique
  images: {
    unoptimized: true,
  },

  // URLs avec trailing slash pour cohérence
  trailingSlash: true,
};

export default nextConfig;
