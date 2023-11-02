function toggleMenu() {
    var menuLinks = document.querySelector(".menu-links");
    menuLinks.classList.toggle("active");
}

function rotateCard(button) {
    const card = button.closest('.card');
    card.classList.toggle('flip');
}