function toggleMenu() {
    var menuLinks = document.querySelector(".menu-links");
    menuLinks.classList.toggle("active");
}

function rotateCard(button) {
    const card = button.closest('.card');
    card.classList.toggle('flip');
}

document.addEventListener('DOMContentLoaded', function () {
    // Obtém o caminho da URL atual
    var path = window.location.pathname;

    // Remove a barra inicial, se houver
    path = path.replace(/^\/|\/$/g, '');

    // Encontra o link correspondente ao caminho atual
    var activeLink = document.querySelector('.nav-link[href="' + path + '"]');

    // Adiciona a classe 'active' ao link correspondente
    if (activeLink) {
        activeLink.classList.add('active');
    }
});

// Ativar a classe 'active' no link clicado
var links = document.querySelectorAll('.nav-link');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        links.forEach(function(innerLink) {
            innerLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});
