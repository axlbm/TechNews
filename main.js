document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay:300});
ScrollReveal().reveal('.card-banner-one',{delay:300});
ScrollReveal().reveal('.card-banner-two',{delay:300});
ScrollReveal().reveal('.footer-links',{delay:300});
ScrollReveal().reveal('.footer',{delay:300});