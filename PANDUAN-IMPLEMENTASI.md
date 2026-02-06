# PANDUAN IMPLEMENTASI WEBSITE EL-ZAHABI TRAVEL

## 📌 Ringkasan Project

Website bisnis travel El-Zahabi Travel yang menyediakan:
- ✈️ Paket Umroh
- 🛫 Tiket Pesawat (Domestik & Internasional)
- 🏨 Penyewaan Hotel
- 🚌 Sewa Bus 30 Kursi
- 🗺️ Paket Tour Wisata
- 👥 Program Outbound

## 🎯 Fitur Utama

### 1. **Home (Landing Page)**
- Hero section dengan CTA button
- Service cards showcase dengan 6 layanan utama
- Why choose us section
- Testimonials
- Call to action

### 2. **Umroh Section**
- 3 tier paket (Reguler, Premium, Keluarga)
- Harga dan durasi
- Feature list setiap paket
- Booking button

### 3. **Pesawat Section**
- Search form (Dari, Ke, Tanggal, Penumpang)
- Flight offers dengan harga dan detail
- Quick booking

### 4. **Hotel Section**
- Search form (Kota, Check-in, Check-out, Jumlah Kamar)
- Hotel cards dengan rating
- Harga per malam
- Booking button

### 5. **Bus Section**
- Spesifikasi bus 30 kursi
- Pricing table
- Fitur-fitur unggulan
- Booking CTA

### 6. **Tour Section**
- Grid 6 paket tour
- Destinasi populer (Bali, Lombok, Yogyakarta, RAD Ampat, Danau Toba, Malaysia-Singapore)
- Harga dan durasi
- Itinerary singkat

### 7. **Outbound Section**
- 6 kategori outbound
- Icon untuk setiap tipe
- Deskripsi dan harga
- Booking button

### 8. **Contact Section**
- Contact form dengan validation
- Contact info (alamat, telepon, email)
- Jam operasional
- Social media links

## 🔧 Setup & Installation

### Langkah 1: Download File
```bash
# File sudah tersedia di:
- index.html (halaman utama)
- assets/css/style.css (styling)
- assets/js/script.js (interaktivitas)
```

### Langkah 2: Buka di Browser
```bash
# Opsi 1: Drag-drop index.html ke browser
# Opsi 2: Klik kanan index.html > Open with > Browser
# Opsi 3: Gunakan Live Server di VS Code
#   - Install extension "Live Server"
#   - Klik kanan index.html > "Open with Live Server"
```

### Langkah 3: Test Responsiveness
```bash
# Test di berbagai ukuran screen:
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024)
- Mobile (375x667, 414x896)
```

## 🎨 Customize

### Mengubah Warna Brand

Edit file `assets/css/style.css` baris 1-10:

```css
:root {
    --primary-color: #1e88e5;    /* Warna utama (biru) */
    --secondary-color: #ff6f00;  /* Warna highlight (orange) */
    --text-color: #333;          /* Warna teks */
    --light-bg: #f5f5f5;         /* Background terang */
    --white: #ffffff;            /* Warna putih */
}
```

### Mengubah Konten Paket

Edit section paket di `index.html`:

```html
<!-- Cari section #umroh, #tour, atau section lainnya -->
<!-- Edit harga, durasi, deskripsi sesuai kebutuhan -->
```

### Mengubah Informasi Kontak

Cari dan edit di `index.html`:
- Alamat (bagian footer & contact)
- Nomor telepon
- Email
- Jam operasional

## 📸 Mengganti Placeholder Image

### Opsi 1: Download dari service penyedia
- Pexels.com
- Unsplash.com
- Pixabay.com

### Opsi 2: Upload image lokal
```html
<!-- Ganti dari: -->
<img src="https://via.placeholder.com/300x200?text=Umroh+Reguler" alt="Umroh Reguler">

<!-- Menjadi: -->
<img src="images/umroh-reguler.jpg" alt="Umroh Reguler">
```

Kemudian buat folder `images/` dan upload file image.

## ✅ Pre-Launch Checklist

- [ ] **Images**
  - [ ] Ganti semua placeholder images
  - [ ] Kompresi images (gunakan TinyJPG atau ImageOptim)
  - [ ] Pastikan alt text sesuai

- [ ] **Konten**
  - [ ] Update semua harga
  - [ ] Update durasi paket
  - [ ] Update deskripsi layanan
  - [ ] Cek spelling & grammar

- [ ] **Contact**
  - [ ] Update alamat kantor
  - [ ] Update nomor telepon
  - [ ] Update email
  - [ ] Update jam operasional

- [ ] **Testing**
  - [ ] Test di Chrome, Firefox, Safari
  - [ ] Test di Android & iOS
  - [ ] Test semua form submission
  - [ ] Test semua button/link bekerja
  - [ ] Test scroll smoothing
  - [ ] Test mobile menu hamburger

- [ ] **Form Integration** (Optional)
  - [ ] Setup email notification (gunakan Formspree atau EmailJS)
  - [ ] Setup WhatsApp button (gunakan wa.me)
  - [ ] Setup Google Analytics

- [ ] **SEO**
  - [ ] Setup title & meta description
  - [ ] Setup social media preview
  - [ ] Add schema.json untuk structured data

- [ ] **Hosting**
  - [ ] Pilih hosting provider
  - [ ] Setup domain
  - [ ] Upload file ke hosting
  - [ ] Test website secara online
  - [ ] Setup SSL certificate

## 🚀 Deploy ke Hosting

### Opsi 1: Netlify (Gratis & Mudah)

1. Buat akun di Netlify.com
2. Connect GitHub repository
3. Deploy otomatis setiap ada update

### Opsi 2: Heroku (Gratis)

1. Buat akun di Heroku.com
2. Install Heroku CLI
3. Buat Procfile dan app.json
4. Deploy dari terminal

### Opsi 3: Shared Hosting (IDWebHost, Niagahoster, dll)

1. Beli hosting plan
2. Upload file via FTP (FileZilla)
3. Setup domain di control panel

## 🔌 Integrasi Tambahan

### Email Form Submission

**Opsi A: Formspree.io**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
    <!-- form fields -->
</form>
```

**Opsi B: EmailJS**
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('service_id', 'template_id', vars);
```

### WhatsApp Integration

```html
<!-- WhatsApp Button -->
<a href="https://wa.me/62821987654321?text=Halo%20El-Zahabi%20Travel" target="_blank">
    Chat WhatsApp
</a>
```

### Google Analytics

```html
<!-- Tambahkan di <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 📊 Performance Optimization

### Images Optimization
```bash
# Gunakan TinyPNG/TinyJPG untuk kompresi
# Atau gunakan ImageMagick:
convert input.jpg -quality 85 -resize 50% output.jpg
```

### CSS/JS Minification
```bash
# Gunakan online minifier:
# https://minifier.org
# https://cssminifier.com
```

### Lazy Loading Images
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

## 🔒 Security Best Practices

- ✅ Validate form inputs di server
- ✅ Sanitize user input
- ✅ Use HTTPS (SSL certificate)
- ✅ Keep backups regular
- ✅ Monitor for vulnerabilities
- ✅ Add reCAPTCHA untuk form

## 📱 Mobile App (Optional)

Untuk membuat mobile app dari website:

### Opsi 1: PWA (Progressive Web App)
- Tambahkan manifest.json
- Setup service worker
- Offline-first approach

### Opsi 2: Cordova/Ionic
- Wrap website dalam app container
- Deploy ke App Store & Play Store

## 🎓 Troubleshooting

### Navbar tidak menutup di mobile?
- Pastikan JavaScript tidak ada error di console
- Check apakah hamburger element ada

### Form tidak submit?
- Check validasi input
- Lihat browser console untuk error
- Pastikan form action sudah dikonfigurasi

### Images blurry?
- Pastikan resolution cukup tinggi
- Optimalkan ukuran gambar
- Gunakan webp format jika perlu

### Website lambat?
- Optimalkan images
- Minify CSS & JavaScript
- Setup caching
- Gunakan CDN

## 📞 Support

Untuk bantuan lebih lanjut:
- Hubungi web developer
- Dokumentasi HTML/CSS/JS
- Stack Overflow untuk coding help

---

**Selamat menggunakan website El-Zahabi Travel! 🎉**
