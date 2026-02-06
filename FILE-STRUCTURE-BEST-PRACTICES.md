## STRUKTUR FILE & BEST PRACTICES

### FILE ORGANIZATION

```
El-Zahabi-Travel-Nusantara-Group-website/
│
├── index.html                          # Halaman utama
│
├── assets/
│   ├── css/
│   │   └── style.css                   # Stylesheet utama
│   ├── js/
│   │   ├── script.js                   # Main JavaScript
│   │   └── price-management.js         # Price management system
│   └── images/                         # Folder untuk images
│       ├── logo.png
│       ├── umroh-reguler.jpg
│       ├── tour-bali.jpg
│       └── ... (lebih banyak images)
│
├── README.md                           # Dokumentasi project
├── PANDUAN-IMPLEMENTASI.md             # Setup guide
├── SEO-CONFIG.md                       # SEO configuration
├── WHATSAPP-INTEGRATION.md             # WhatsApp guide
├── INTEGRASI-GUIDE.txt                 # Integration options
├── TESTING-DEPLOYMENT-CHECKLIST.md     # Testing checklist
├── FILE-STRUCTURE.md                   # File ini
├── robots.txt                          # SEO robots
├── sitemap.xml                         # SEO sitemap
└── .htaccess                           # Server config
```

### PENJELASAN SETIAP FOLDER

#### Root Level Files (Utama)
- `index.html` - Halaman utama website
- `README.md` - Dokumentasi untuk GitHub/Dokumentasi
- `robots.txt` - Instruksi untuk search engine crawlers
- `sitemap.xml` - Peta website untuk SEO

#### Assets Folder (Asset Digital)
**css/** - Stylesheet
- Hanya `style.css` saja (compressed jika production)
- Contains semua styling untuk seluruh website

**js/** - JavaScript Files
- `script.js` - Main functionality (navbar, smooth scroll, form validation)
- `price-management.js` - Admin tool untuk manage harga

**images/** - Image Assets
- Logo dan branding
- Product images (umroh, hotel, bus, tour)
- Testimonial photos
- Banner/hero images
- Favicon dan app icons

### BEST PRACTICES

#### 1. HTML Structure
```html
<!-- Gunakan semantic HTML -->
<header>
<nav> - for navigation
<main> - for main content
<section> - for each section
<footer> - for footer

<!-- Attribute penting -->
- alt text untuk images
- title untuk links
- lang attribute di <html>
- meta tags komprehensif
```

#### 2. CSS Organization
```css
/* Urutan dalam file: */
1. Root variables
2. Global styles
3. Navbar
4. Hero
5. Services
6. Packages
7. Hotels
8. Bus
9. Contact
10. Footer
11. Animations
12. Responsive (media queries)
```

#### 3. JavaScript Code Standards
```javascript
// Naming conventions
- camelCase untuk variables
- kebab-case untuk IDs & classes
- UPPERCASE untuk constants

// Organization
- Event listeners at top
- Functions after
- Utilities at bottom
- Comments untuk di-explain logic

// Performance
- Defer heavy JS loading
- Use async untuk external scripts
- Minimize DOM manipulation
```

#### 4. Naming Conventions

**HTML Classes:**
```
.navbar, .nav-menu, .nav-item
.hero, .hero-content
.service-card, .service-grid
.package, .package-card
.button, .btn, .cta-btn
.section, .section-alt, .container
```

**CSS Variables:**
```
--primary-color
--secondary-color
--text-color
--light-bg
--shadow
--transition
```

**JavaScript Functions:**
```
openMenu(), closeMenu()
formatCurrency(), validateEmail()
fetchData(), submitForm()
handleClick(), handleSubmit()
initializeApp(), setupListeners()
```

#### 5. API Integration Standards

**Endpoint Structure:**
```
/api/v1/bookings
/api/v1/packages
/api/v1/contact
/api/v1/newsletter
```

**Response Format:**
```json
{
  "status": "success/error",
  "message": "Description",
  "data": {},
  "timestamp": "2024-02-06T00:00:00Z"
}
```

#### 6. Image Optimization

**Size Guidelines:**
- Hero: 1920x1080px max
- Product: 800x600px max
- Thumbnail: 300x300px max
- Icon: 48x48px - 256x256px

**Formats:**
- PNG untuk images dengan transparency
- JPEG untuk photos
- WebP untuk modern browsers (dengan fallback)
- SVG untuk icons

**Compression:**
- Max 100KB per image (mobile)
- Max 300KB per image (desktop)
- Use tools: TinyPNG, ImageOptim, Squoosh

#### 7. Performance Metrics

Target Metrics:
```
First Contentful Paint: < 1.8s
Largest Contentful Paint: < 2.5s
Cumulative Layout Shift: < 0.1
Speed Index: < 3.4s
Total Bundle Size: < 500KB
```

#### 8. SEO Best Practices

**On-Page SEO:**
```
- H1 only once per page
- H2/H3 untuk subheadings
- Keyword density 1-2%
- Internal links min 3 per page
- Meta description 155-160 chars
- Title tag 50-60 chars
```

**Technical SEO:**
```
- XML sitemap updated
- robots.txt configured
- Canonical URLs set
- No broken links
- Mobile responsive
- Fast loading
- HTTPS only
- Structured data
```

#### 9. Accessibility Standards

**WCAG 2.1 Compliance:**
```
- Color contrast ratio 4.5:1
- Focus indicators visible
- Keyboard navigation
- Alt text for all images
- Form labels present
- Skip links available
- Semantic HTML
- ARIA labels where needed
```

#### 10. Version Control

**Git Best Practices:**
```
Main Branch - Production ready
├── Development - For testing
├── Feature branches - Per feature
└── Hotfix branches - For critical bugs

Commit Messages:
- feat: Add new feature
- fix: Fix bug
- docs: Documentation
- style: Formatting
- refactor: Code restructure
- test: Add tests
- chore: Maintenance
```

### FILE SIZE LIMITS

```
HTML: < 100KB
CSS: < 50KB
JS: < 100KB
Images: < 150KB each
Font: < 100KB per font file
Total: < 500KB
```

### CACHING STRATEGY

```
Static Assets (1 year):
- Images
- Fonts
- CSS (minified)

Dynamic Content (1 month):
- HTML pages
- JSON feeds

Short Cache (1 day):
- API responses
- Analytics data
```

### MONITORING & LOGS

**Keep logs for:**
```
- 404 errors
- 500 server errors
- Form submissions
- User actions
- Performance metrics
- Security events
```

**Log Location:**
```
/logs/errors.log
/logs/access.log
/logs/performance.log
```

### BACKUP STRATEGY

```
Daily: Database incremental
Weekly: Full file backup
Monthly: Offsite backup
Retention: 30 days
Testing: Monthly restore test
```

### SECURITY CHECKLIST

- [ ] HTTPS only
- [ ] Input validation
- [ ] Output encoding
- [ ] CSRF tokens
- [ ] Rate limiting
- [ ] Security headers
- [ ] Regular updates
- [ ] Vulnerability scanning
- [ ] Penetration testing
- [ ] Incident response plan

### DOCUMENTATION STANDARDS

**For Each Function:**
```javascript
/**
 * Function description
 * @param {type} paramName - Parameter description
 * @return {type} Description of return value
 * @example
 * functionName('example')
 */
```

**For Each Section:**
```html
<!-- SECTION NAME -->
<!-- Purpose: ... -->
<!-- Last updated: 2024-02-06 -->
```

### GROWTH PLANNING

**Phase 1 (Month 1):**
- Basic functionality
- Core services
- Contact form
- Mobile responsive

**Phase 2 (Month 3):**
- Payment integration
- User accounts
- Booking system
- Email automation

**Phase 3 (Month 6):**
- Mobile app
- Advanced analytics
- AI chatbot
- Multi-language

**Phase 4 (Year 1):**
- Community features
- User reviews
- Referral program
- API for partners

### MARKETING OPTIMIZATION

**Landing Page Elements:**
```
1. Clear value proposition
2. Strong CTA
3. Social proof (reviews)
4. Feature highlights
5. FAQ section
6. Contact form
7. Trust signals
```

**Conversion Rate Optimization:**
```
- A/B test headlines
- Optimize CTA button
- Reduce form fields
- Improve page speed
- Mobile optimization
- Clear pricing
- Trust badges
```

---

**File Structure & Best Practices Document Complete!** ✅

Untuk pertanyaan atau update lebih lanjut, refer ke dokumentasi yang tersedia.
