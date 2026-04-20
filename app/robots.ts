import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.finapilot.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        // ═══ AEO: ENSURE AI ENGINES CAN INDEX BRAND ENTITY ═══
        userAgent: [
          'GPTBot', 
          'Google-Extended', 
          'Claude-Web', 
          'applebot-extended', 
          'CCBot',
          'PerplexityBot'
        ],
        allow: '/',
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Bravebot'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
