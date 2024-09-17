/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexel.com",
            }
        ]
    }
};

export default nextConfig;
