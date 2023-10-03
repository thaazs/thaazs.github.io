function toggleMenu() {
    var menuLinks = document.querySelector(".menu-links");
    menuLinks.classList.toggle("active");
}

const images = document.querySelectorAll(".carousel-image");
const carouselDots = document.querySelector(".carousel-dots");

let counter = 0;
const slideInterval = 5000; // 5 segundos

// Função para criar os botões circulares
function createDots() {
    images.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            counter = i;
            showImage(counter);
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(nextSlide, slideInterval);
        });
        carouselDots.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        if (i === counter) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
    updateDots();
}

function nextSlide() {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    showImage(counter);
}

// Iniciar o carrossel automaticamente
createDots();
showImage(counter);
let autoSlideInterval = setInterval(nextSlide, slideInterval);