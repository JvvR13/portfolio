// scripts.js
$(document).ready(function () {
    // Adiciona classe 'active' ao menu de navegação quando é clicado
    $('.nav-list a').on('click', function () {
        $('.nav-list').toggleClass('active');
    });

    // Carrossel de slides com Slick.js
    $('.project-carousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
