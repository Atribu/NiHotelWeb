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
      {
        source: "/tr/izmit-sehir-merkezi-otelleri",
        destination: "/tr/izmit-otel",
        permanent: true,
      },
      {
        source: "/tr/izmit-merkezde-oteller",
        destination: "/tr/izmit-hotel",
        permanent: true,
      },
      {
        source: "/tr/izmit-otelleri-merkez",
        destination: "/tr/izmit-pansiyon",
        permanent: true,
      },
      {
        source: "/tr/izmit-merkeze-yakin-oteller",
        destination: "/tr/izmit-hotel-fiyat",
        permanent: true,
      },
      {
        source: "/tr/izmit-sehir-merkezindeki-oteller",
        destination: "/tr/izmit-hotel-tatil",
        permanent: true,
      },
      {
        source: "/tr/izmit-merkez-otelleri",
        destination: "/tr/izmit-hotel-merkez",
        permanent: true,
      },
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
