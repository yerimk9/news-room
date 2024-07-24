/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "q.livesense.co.jp",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.korea.kr",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.seoulilbo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "www.jejunews.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.busan.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.daejonilbo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jjan.kr",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "logo-resources.thevc.kr",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
