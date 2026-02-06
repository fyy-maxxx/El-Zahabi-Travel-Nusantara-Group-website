// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Validate form
        const name = document.querySelector('input[placeholder="Nama Lengkap"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const phone = document.querySelector('input[placeholder="No. Telepon"]').value;
        const message = document.querySelector('textarea').value;
        
        if (!name || !email || !phone || !message) {
            alert('Mohon isi semua field yang diperlukan!');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Email tidak valid!');
            return;
        }
        
        // Phone validation
        const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            alert('Nomor telepon tidak valid!');
            return;
        }
        
        // Show success message
        alert('Pesan Anda telah dikirim! Tim kami akan menghubungi Anda segera.');
        this.reset();
    });
}

// Book Button Handler
const bookButtons = document.querySelectorAll('.btn-package, .cta-btn');
bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Terima kasih! Silakan hubungi kami untuk informasi lebih lanjut.\n\nNo. Telepon: (021) 1234-5678\nEmail: booking@elzahabitravel.com');
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .package, .hotel-card, .tour-card, .testimonial-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// Search flights handler
const searchButton = document.querySelector('.booking-form .btn-search');
if (searchButton) {
    searchButton.addEventListener('click', function() {
        const from = document.querySelectorAll('.booking-form input')[0].value;
        const to = document.querySelectorAll('.booking-form input')[1].value;
        const date = document.querySelectorAll('.booking-form input')[2].value;
        const passengers = document.querySelectorAll('.booking-form input')[3].value;
        
        if (!from || !to || !date || !passengers) {
            alert('Mohon isi semua field pencarian!');
            return;
        }
        
        alert(`Pencarian Tiket:\nDari: ${from}\nKe: ${to}\nTanggal: ${date}\nPenumpang: ${passengers}\n\nHubungi kami untuk pemesanan!`);
    });
}

// Search hotel handler
const searchHotelInputs = document.querySelectorAll('.search-hotel input');
if (searchHotelInputs.length > 0) {
    const searchHotelButton = document.querySelector('.search-hotel .btn-search');
    if (searchHotelButton) {
        searchHotelButton.addEventListener('click', function() {
            const city = searchHotelInputs[0].value;
            const checkIn = searchHotelInputs[1].value;
            const checkOut = searchHotelInputs[2].value;
            const rooms = searchHotelInputs[3].value;
            
            if (!city || !checkIn || !checkOut || !rooms) {
                alert('Mohon isi semua informasi hotel!');
                return;
            }
            
            alert(`Pencarian Hotel:\nKota: ${city}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nJumlah Kamar: ${rooms}\n\nHubungi kami untuk pemesanan!`);
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Book button on service cards
document.querySelectorAll('.service-card .btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceName = this.closest('.service-card').querySelector('h3').textContent;
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Currency formatter
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Countdown timer (optional for special offers)
function startCountdown() {
    const countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now
    
    const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (distance < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('El-Zahabi Travel website loaded successfully!');
});
