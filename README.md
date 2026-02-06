# 🌍 El-Zahabi Travel Nusantara Group - Website

Website modern dan responsif untuk El-Zahabi Travel, penyedia layanan perjalanan komprehensif terpercaya di Indonesia.

## 📋 Daftar Layanan

El-Zahabi Travel menyediakan berbagai layanan perjalanan:

### 1. **Paket Umroh** ✈️
- Umroh Reguler (9H/8M)
- Umroh Premium (12H/11M) 
- Umroh Keluarga (14H/13M)
- Harga: Rp 28,000,000 - Rp 42,000,000

### 2. **Tiket Pesawat** 🛫
- Tiket domestik seluruh Indonesia
- Tiket internasional ke berbagai negara
- Harga kompetitif dengan berbagai maskapai

### 3. **Penyewaan Hotel** 🏨
- Hotel bintang 3, 4, dan 5
- Destinasi lokal dan internasional
- Fleksibel sesuai kebutuhan

### 4. **Sewa Bus 30 Kursi** 🚌
- Kapasitas: 30 kursi
- AC, WiFi, Reclining Seat
- Sopir profesional berpengalaman
- Harga: Rp 2,500,000 - Rp 4,500,000

### 5. **Paket Tour Wisata** 🗺️
- Bali, Lombok, Yogyakarta, Raja Ampat
- Danau Toba, Malaysia-Singapura
- Harga: Rp 2,800,000 - Rp 12,500,000

### 6. **Program Outbound** 👥
- Adventure Outbound
- Nature & Eco Outbound
- Water Sports Outbound
- Corporate Dinner & Event
- Sport & Recreation
- Training & Workshop
- Harga: Rp 500,000 - Rp 950,000/orang

## 🎯 Fitur Website

✅ **Responsive Design** - Kompatibel dengan desktop, tablet, dan mobile
✅ **Navigasi Intuitif** - Menu yang mudah dipahami
✅ **Booking System** - Form pemesanan langsung
✅ **Contact Form** - Hubungi kami dengan mudah
✅ **Service Showcase** - Tampilan menarik untuk setiap layanan
✅ **Testimonials** - Ulasan dari pelanggan puas
✅ **Social Media Links** - Terhubung di berbagai platform
✅ **Mobile Menu** - Hamburger menu untuk mobile

## 📂 Struktur Folder

```
El-Zahabi-Travel-Nusantara-Group-website/
├── index.html              # Halaman utama
├── assets/
│   ├── css/
│   │   └── style.css       # Stylesheet
│   └── js/
│       └── script.js       # JavaScript functionality
├── README.md               # Dokumentasi project
└── LICENSE                 # Lisensi project
```

## 🚀 Cara Menggunakan

### 1. **Buka Website Secara Lokal**
- Buka browser favorit Anda
- Drag-drop file `index.html` ke browser ATAU
- Gunakan Live Server extension di VS Code

### 2. **Navigasi Website**
- **Beranda**: Tampilan utama dengan hero section
- **Umroh**: Paket umroh dengan detail harga
- **Pesawat**: Pencarian dan pemesanan tiket
- **Hotel**: Penyewaan akomodasi
- **Bus**: Sewa bus 30 kursi
- **Tour**: Paket wisata lengkap
- **Outbound**: Program team building
- **Kontak**: Form kontak dan informasi

### 3. **Fitur Interaktif**
- Navigasi smooth scroll
- Mobile responsive menu
- Form validation
- Booking alerts
- Hover effects

## 🎨 Desain & Warna

**Warna Utama:**
- Primary: `#1e88e5` (Biru)
- Secondary: `#ff6f00` (Orange)
- Text: `#333` (Gelap)
- Background: `#f5f5f5` (Abu-abu ringan)

**Font:** Segoe UI, Tahoma, Geneva, Verdana, Sans-serif

## 📱 Responsif Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 Teknologi

- **HTML5**: Struktur semantic
- **CSS3**: Styling modern dengan Flexbox & Grid
- **JavaScript**: Vanilla JS untuk interaktivitas
- **Font Awesome**: Ikon library
- **Google Fonts**: Typography

## 📞 Informasi Kontak

- **Alamat**: Jl. Merdeka No. 123, Jakarta Pusat 12190
- **Telepon**: (021) 1234-5678 | +62 821-9876-5432
- **Email**: info@elzahabitravel.com | booking@elzahabitravel.com
- **Jam Operasional**: 
  - Senin-Jumat: 08:00 - 17:00
  - Sabtu: 09:00 - 16:00
  - Minggu: Tutup

## 🔐 Keamanan

- Form validation untuk semua input
- Email validation
- Phone number validation
- Input sanitization

## 📈 SEO Optimization

- Meta tags untuk deskripsi
- Semantic HTML structure
- Alt text untuk images
- Mobile-friendly design
- Fast loading performance

## 🎓 Panduan Pengembangan

### Menambah Paket Baru
1. Buka `index.html`
2. Cari section yang sesuai (misalnya `#umroh`)
3. Duplikasi `.package` card dan edit konten
4. Update harga dan deskripsi

### Mengubah Warna
1. Buka `assets/css/style.css`
2. Edit variabel dalam `:root` selector
3. Semua elemen akan otomatis berubah

### Menambah Layanan Baru
1. Tambahkan kartu layanan di `.service-grid`
2. Tambahkan section baru dengan ID unik
3. Update link di navbar dan service grid
4. Styling akan otomatis menyesuaikan

## 🌐 Deploy ke Production

### Opsi 1: Hosting Gratis (GitHub Pages)
```bash
1. Push code ke GitHub repository
2. Enable GitHub Pages di settings
3. Website live di: https://username.github.io/repo-name
```

### Opsi 2: Hosting Berbayar
- Netlify
- Vercel
- Heroku
- AWS S3 + CloudFront

## 📊 Performance Tips

✅ Kompresi images untuk loading lebih cepat
✅ Lazy loading untuk images
✅ Minify CSS dan JavaScript
✅ Cache untuk browser
✅ CDN untuk static files

## 🚨 Troubleshooting

**Navbar tidak responsif pada mobile?**
- Pastikan JavaScript diload dengan benar
- Clear browser cache (Ctrl+Shift+Delete)

**Images tidak muncul?**
- Placeholder menggunakan `via.placeholder.com`
- Ganti dengan URL image asli Anda

**Form tidak bekerja?**
- Pastikan semua input memiliki placeholder
- Check browser console untuk error

## 📋 Checklist Pre-Launch

- [ ] Ganti placeholder images dengan foto asli
- [ ] Update informasi kontak yang benar
- [ ] Test semua form dan button
- [ ] Test responsif di berbagai device
- [ ] Optimize images
- [ ] Setup email notification untuk form
- [ ] Install SSL certificate
- [ ] Setup analytics
- [ ] Mobile app (optional)

## 📄 Lisensi

Lihat file [LICENSE](LICENSE) untuk detail

## 👨‍💼 Support & Maintenance

Untuk bantuan atau pertanyaan:
- Email: info@elzahabitravel.com
- Telepon: (021) 1234-5678

---

**Dibuat dengan ❤️ untuk El-Zahabi Travel Nusantara Group**
*Last Updated: 2024*
