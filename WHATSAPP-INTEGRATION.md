<!-- WhatsApp Business Integration Guide -->

# WhatsApp Integration untuk El-Zahabi Travel

## Setup WhatsApp Business API

### 1. WhatsApp Button di Website

Tambahkan button WhatsApp untuk quick contact:

```html
<!-- Fixed WhatsApp Button (di bawah navbar) -->
<a href="https://wa.me/6281234567890?text=Halo%20El-Zahabi%20Travel%20saya%20ingin%20bertanya%20tentang%20paket%20tour" 
   class="whatsapp-btn" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-whatsapp"></i>
    Chat WhatsApp
</a>

<!-- CSS untuk WhatsApp Button -->
<style>
.whatsapp-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    padding: 12px 20px;
    border-radius: 50px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 999;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    font-weight: 600;
}

.whatsapp-btn:hover {
    background-color: #1eca5a;
    transform: scale(1.1);
}

.whatsapp-btn i {
    font-size: 20px;
}

@media (max-width: 480px) {
    .whatsapp-btn {
        padding: 10px 15px;
        font-size: 14px;
    }
}
</style>
```

### 2. WhatsApp Links untuk Setiap Service

```html
<!-- Umroh -->
<a href="https://wa.me/6281234567890?text=Saya%20tertarik%20dengan%20paket%20Umroh%20Anda" 
   class="btn">Tanya via WhatsApp</a>

<!-- Tiket Pesawat -->
<a href="https://wa.me/6281234567890?text=Saya%20ingin%20memesan%20tiket%20pesawat" 
   class="btn">Chat for Booking</a>

<!-- Room Booking -->
<a href="https://wa.me/6281234567890?text=Saya%20ingin%20booking%20kamar%20hotel" 
   class="btn">Pesan Kamar</a>
```

### 3. URL Encoding untuk WhatsApp Messages

Gunakan URL-encoded messages untuk WhatsApp:

```
Standar:
https://wa.me/[NOMOR_TELEPON]?text=[PESAN]

Contoh:
https://wa.me/6281234567890?text=Halo%20saya%20ingin%20info%20paket%20umroh

URL Encoding:
- Space = %20
- & = %26
- # = %23
- ? = %3F
- / = %2F
```

### 4. WhatsApp Chatbot dengan Message Templates

```html
<!-- Automated Greeting Message -->
<script>
function openWhatsApp(service) {
    const messages = {
        'umroh': 'Saya%20tertarik%20dengan%20paket%20Umroh%20Anda.%20Bisa%20dijelaskan%20lebih%20detail%3F',
        'pesawat': 'Saya%20ingin%20memesan%20tiket%20pesawat.%20Berapa%20harganya%3F',
        'hotel': 'Saya%20mencari%20hotel%20di%20Jakarta.%20Rekomendasi%3F',
        'bus': 'Saya%20ingin%20menyewa%20bus%2030%20kursi.%20Berapa%20tarifnya%3F',
        'tour': 'Saya%20tertarik%20paket%20tour%20Bali.%20Bisa%20explain%20itinerary%3F',
        'outbound': 'Kami%20ingin%20mengadakan%20acara%20outbound.%20Bisa%20kasih%20penawaran%3F'
    };
    
    const message = messages[service] || 'Halo%20El-Zahabi%20Travel';
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
}
</script>
```

### 5. WhatsApp Group Link (Optional)

Tambahkan grup WhatsApp untuk komunitas:

```html
<a href="https://chat.whatsapp.com/GROUP_LINK_HERE" 
   target="_blank" class="btn">Bergabung di Grup WhatsApp</a>
```

### 6. Google Form sebagai Fallback

Jika user tidak punya WhatsApp, provide Google Form alternative:

```html
<!-- Hybrid Contact Method -->
<div class="contact-methods">
    <a href="https://wa.me/6281234567890" class="btn whatsapp-contact">
        <i class="fab fa-whatsapp"></i> Chat WhatsApp
    </a>
    <a href="https://forms.gle/YOUR_FORM_ID" class="btn form-contact" target="_blank">
        <i class="fas fa-envelope"></i> Kirim Form
    </a>
</div>
```

## WhatsApp Business API Implementasi (Advanced)

### Untuk Large Scale Operations

1. **Setup WhatsApp Business Account:**
   - Daftar di: https://business.facebook.com
   - Verify bisnis
   - Get API credentials

2. **Integration dengan Booking System:**
   
```javascript
// Send WhatsApp message via API
async function sendWhatsAppNotification(phoneNumber, message) {
    const apiUrl = "https://graph.instagram.com/v17.0/YOUR_WABA_ID/messages";
    
    const payload = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: phoneNumber,
        type: "text",
        text: {
            preview_url: false,
            body: message
        }
    };
    
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer YOUR_TOKEN`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}
```

3. **Auto Reply Templates:**

```
Template 1: Welcome
"Terima kasih telah menghubungi El-Zahabi Travel! 
Operator kami akan merespon dalam waktu kurang dari 1 jam.
Untuk kebutuhan mendesak: 0821-987-654"

Template 2: Booking Confirmation
"Pesanan Anda untuk [PAKET] telah dikonfirmasi!
Kami akan mengirim invoice dan detail pembayaran dalam waktu 15 menit."

Template 3: Reminder
"Assalamualaikum [NAMA], kami ingin mengingatkan tentang [EVENT] Anda pada [TANGGAL].
Jika ada yang ingin ditanyakan, hubungi kami sekarang 😊"
```

## Analytics & Engagement

### Track WhatsApp Conversions

```javascript
// GTM / Google Analytics tracking
function trackWhatsAppClick(service) {
    gtag('event', 'whatsapp_click', {
        'service': service,
        'timestamp': new Date()
    });
    
    // Also track via Facebook Pixel
    fbq('track', 'Contact', {
        'value': 'whatsapp',
        'currency': 'IDR'
    });
}
```

### WhatsApp Response Time Metrics

- Target response time: < 5 minutes
- Availability: 8:00 - 18:00 (or 24/7)
- Track response rate
- Monitor customer satisfaction

## Best Practices

✅ **Setup Multiple Numbers** untuk different departments:
   - Sales: 0821-XXXX-XXXX
   - Support: 0821-XXXX-XXXX
   - Booking: 0821-XXXX-XXXX

✅ **Quick Reply Buttons** di WhatsApp:
   - Query list
   - Quick responses
   - Menu buttons

✅ **Business Hours Display:**
   - Status online/offline
   - Auto-reply for after hours
   - Availability calendar

✅ **Use WhatsApp Status** untuk:
   - Promo announcements
   - New packages
   - Customer testimonials
   - Event updates

✅ **Media Sharing:**
   - Send paket details (PDF)
   - Share itinerary (image)
   - Video testimonials
   - Photo gallery

## Integration Platforms

1. **Tawk.to** - Chat + WhatsApp
2. **Intercom** - Multiple channels
3. **Zendesk** - Enterprise solution
4. **HubSpot** - CRM + Chat
5. **Chatwoot** - Open source

## Compliance & Privacy

⚠️ **Important:**
- Respect user privacy
- Don't spam or send unsolicited messages
- Follow WhatsApp Business policies
- Get explicit consent before contacting
- Provide opt-out mechanism
- Comply with GDPR/CCPA if applicable

---

**WhatsApp Integration Setup Complete!** ✅
