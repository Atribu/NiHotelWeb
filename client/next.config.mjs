import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "teonahotel.com" }],
        destination: "https://www.teonahotel.com/:path*",
        permanent: true,
      },
      { source: "/kurumsal", destination: "/tr/hakkimizda", permanent: true },
      { source: "/odalar", destination: "/tr/odalar", permanent: true },
      { source: "/restaurant", destination: "/tr/restoran", permanent: true },
      { source: "/iletisim", destination: "/tr/iletisim", permanent: true },
      { source: "/galeri", destination: "/tr/galeri", permanent: true },
      { source: "/toplanti", destination: "/tr/toplanti", permanent: true },
      { source: "/sehir-rehberi", destination: "/tr/sehir-rehberi", permanent: true },
      { source: "/tr/kurumsal", destination: "/tr/hakkimizda", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};
 
export default withNextIntl(nextConfig);
