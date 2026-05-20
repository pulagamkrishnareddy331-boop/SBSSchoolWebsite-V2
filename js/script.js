/* =========================
   HERO SLIDER
========================= */

const slides = document.querySelectorAll('.hero-slide');

let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove('active-slide');

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active-slide');
}

setInterval(changeSlide, 4000);
/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add(
            "bg-black/70",
            "backdrop-blur-md",
            "shadow-lg"
        );

    } else {

        navbar.classList.remove(
            "bg-black/70",
            "backdrop-blur-md",
            "shadow-lg"
        );
    }
});
/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");
});
/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages = document.querySelectorAll(".gallery-image");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.classList.remove("hidden");

        lightbox.classList.add("flex");

        lightboxImage.src = image.src;
    });
});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("flex");

    lightbox.classList.add("hidden");
});