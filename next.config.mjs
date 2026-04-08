/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  // ═══ SEO: Security Headers (improves Google trust signals + Core Web Vitals) ═══
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers (Google rewards secure sites)
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Strict Transport Security (HSTS)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },

  // ═══ SEO: Canonical redirect (www → non-www or vice versa) ═══
  async redirects() {
    return [
      // Redirect non-www to www (canonical domain)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'finapilot.com',
          },
        ],
        destination: 'https://www.finapilot.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
