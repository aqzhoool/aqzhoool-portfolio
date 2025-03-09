document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        // close menu
        document.getElementById('burger-toggle').checked = false;
        
        // smooth scroll
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// closing menu when x pressed
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('burger-toggle').checked = false;
});

// close menu when scrolled
window.addEventListener('scroll', () => {
    document.getElementById('burger-toggle').checked = false;
});