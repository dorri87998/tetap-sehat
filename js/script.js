// script.js

// Menambahkan efek scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Menambahkan efek paralaks sederhana
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const intro = document.querySelector('.intro');
    
    if(intro) {
        intro.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

// Menambahkan kelas aktif saat elemen terlihat di viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observasi semua kartu kesehatan
document.querySelectorAll('.health-card').forEach(card => {
    observer.observe(card);
});

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Kesehatan Jasmani & Rohani telah dimuat!');
    
    // Tambahkan kelas animated untuk intro
    const intro = document.querySelector('.intro');
    if(intro) {
        setTimeout(() => {
            intro.classList.add('animated');
        }, 300);
    }
});