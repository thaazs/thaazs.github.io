function toggleMenu() {
    var menuLinks = document.querySelector(".menu-links");
    menuLinks.classList.toggle("active");
}

function rotateCard(button) {
    const card = button.parentElement.parentElement; // Encontra o elemento 'card' pai do botão clicado
    card.classList.toggle('flip');
}
