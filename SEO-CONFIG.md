# El-Zahabi Travel - Website SEO & META Tags Configuration

## Meta Tags untuk SEO

Pastikan menambahkan meta tags berikut di `<head>` tag di index.html:

```html
<!-- Basic Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="El-Zahabi Travel - Penyedia layanan perjalanan terpercaya. Umroh, tiket pesawat, hotel, sewa bus 30 kursi, paket tour, dan outbound.">
<meta name="keywords" content="umroh, tiket pesawat, hotel, sewa bus, tour wisata, outbound, travel, perjalanan">
<meta name="author" content="El-Zahabi Travel">
<meta name="theme-color" content="#1e88e5">

<!-- Open Graph Tags (untuk social media) -->
<meta property="og:type" content="website">
<meta property="og:title" content="El-Zahabi Travel - Paket Umroh, Tiket Pesawat, Hotel & Tour">
<meta property="og:description" content="Penyedia layanan perjalanan terpercaya dengan berbagai paket menarik">
<meta property="og:image" content="https://elzahabitravel.com/images/og-image.jpg">
<meta property="og:url" content="https://elzahabitravel.com">

<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="El-Zahabi Travel">
<meta name="twitter:description" content="Paket Umroh, Tiket Pesawat, Hotel & Tour">
<meta name="twitter:image" content="https://elzahabitravel.com/images/twitter-image.jpg">

<!-- Structured Data (Schema.json) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "El-Zahabi Travel",
  "image": "https://elzahabitravel.com/images/logo.png",
  "description": "Penyedia layanan perjalanan terpercaya",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Merdeka No. 123",
    "addressLocality": "Jakarta",
    "postalCode": "12190",
    "addressCountry": "ID"
  },
  "telephone": "(021) 1234-5678",
  "email": "info@elzahabitravel.com",
  "sameAs": [
    "https://facebook.com/elzahabitravel",
    "https://instagram.com/elzahabitravel",
    "https://twitter.com/elzahabitravel"
  ]
}
</script>

<!-- Favicon -->
<link rel="icon" type="image/png" href="images/favicon.png">
<link rel="apple-touch-icon" href="images/apple-touch-icon.png">

<!-- Preconnect untuk CDN -->
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Canonical URL -->
<link rel="canonical" href="https://elzahabitravel.com">
```

## robots.txt

Buat file `robots.txt` di root folder:

```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /private
Disallow: /temp

Sitemap: https://elzahabitravel.com/sitemap.xml
```

## sitemap.xml

Buat file `sitemap.xml` di root folder:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://elzahabitravel.com/</loc>
        <lastmod>2024-02-06</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://elzahabitravel.com/#umroh</loc>
        <lastmod>2024-02-06</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://elzahabitravel.com/#pesawat</loc>
        <lastmod>2024-02-06</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://elzahabitravel.com/#hotel</loc>
        <lastmod>2024-02-06</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://elzahabitravel.com/#bus</loc>
        <lastmod>2024-02-06</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://elzahabitravel.com/#tour</loc>
        <lastmod>2024-02-06</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://elzahabitravel.com/#outbound</loc>
        <lastmod>2024-02-06</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://elzahabitravel.com/#contact</loc>
        <lastmod>2024-02-06</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
</urlset>
```

## .htaccess (untuk Apache servers)

Buat file `.htaccess` di root folder untuk optimization:

```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
</IfModule>

# Remove WWW
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ http://%1/$1 [R=301,L]

# Enable HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove .html extension
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}\.html -f
RewriteRule ^([^\.]+)$ $1.html [NC]
```

## manifest.json (untuk PWA)

Buat file `manifest.json` di root folder untuk Progressive Web App:

```json
{
  "name": "El-Zahabi Travel",
  "short_name": "ElZahabi Travel",
  "description": "Penyedia layanan perjalanan terpercaya",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1e88e5",
  "scope": "/",
  "icons": [
    {
      "src": "images/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "images/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "screenshots": [
    {
      "src": "images/screenshot-1.png",
      "sizes": "540x720",
      "type": "image/png"
    }
  ]
}
```

Link di head tag:
```html
<link rel="manifest" href="manifest.json">
```

## Google Analytics Setup

Tambahkan di head tag sebelum closing `</head>`:

```html
<!-- Google Tag Manager (head) -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
```

Dan di body tag setelah opening `<body>`:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

## SEO Checklist

- ✅ Meta title (60 characters)
- ✅ Meta description (160 characters)
- ✅ Canonical URL
- ✅ Mobile responsive
- ✅ Fast loading (< 3 seconds)
- ✅ SSL certificate (https)
- ✅ XML sitemap
- ✅ robots.txt
- ✅ Structured data (schema.json)
- ✅ Open Graph tags
- ✅ Twitter card tags
- ✅ Google Analytics
- ✅ Google Search Console
- ✅ Page speed optimization
- ✅ Backlinks strategy
- ✅ Content marketing
- ✅ Social media integration
- ✅ Local SEO (Google My Business)

## Local Citation Resources

Daftarkan website di:
- Google My Business
- Bing Places
- Apple Maps
- Waze
- Grab
- Gojek
- Indonesia Yellow Pages
- Marketplace lokal

## Additional Tools

- Google Search Console
- Google PageSpeed Insights
- Google Mobile-Friendly Test
- Screaming Frog URL Crawler
- SEMrush
- Ahrefs
- Moz
- SERanking
