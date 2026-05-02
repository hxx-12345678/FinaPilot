/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  /* 
   * headers() and redirects() are not supported with output: 'export'.
   * These have been moved to public/_headers and public/_redirects for Cloudflare Pages.
   */
}

export default nextConfig
