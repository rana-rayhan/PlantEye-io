/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY: process.env.GOOGLE_GEMINI_API_KEY,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        dns: false,
        tls: false,
        fs: false,
        request: false,
      };
    }
    return config;
  },
  experimental: {
    esmExternals: false,
  },
};

export default nextConfig;
