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

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const intro = document.querySelector('.intro');
    
    if(intro) {
        intro.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

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

document.querySelectorAll('.health-card').forEach(card => {
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Kesehatan Jasmani & Rohani telah dimuat!');
    
    const intro = document.querySelector('.intro');
    if(intro) {
        setTimeout(() => {
            intro.classList.add('animated');
        }, 300);
    }
});
