import { polyfill } from 'smoothscroll-polyfill';

// Smooth scrolling effect for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show "scroll to top" button when user scrolls down
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        document.querySelector('.scroll-to-top').style.display = 'block';
    } else {
        document.querySelector('.scroll-to-top').style.display = 'none';
    }
});

// Smooth scrolling effect for "scroll to top" button
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Polyfill for smooth scrolling in Safari and other browsers
polyfill();
