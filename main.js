let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) { 
        navbar.classList.add('scrolled');
        navbar.style.transform = `translateY(${Math.min(0, lastScroll - currentScroll)}px)`;
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Toggle menu
    const toggleMenu = () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('no-scroll');
    };

    // Закрыть меню
    const closeMenu = () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll');
    };

    // Клик по бургеру
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Клик вне меню
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target)) {
            closeMenu();
        }
    });

    // Клик по ссылкам
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) closeMenu();
        });
    });

    // Закрыть на Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
});

document.getElementById('homeLink').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

