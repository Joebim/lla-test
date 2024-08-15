/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      { hostname: "res.cloudinary.com", protocol: "https" },
      { hostname: "res.cloudinary.com", protocol: "http" },
      {
        protocol: "https",
        hostname: "api.staging.delve.fun",
        port: "",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
