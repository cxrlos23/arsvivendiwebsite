// ===== Navigation aktiver Link =====
const navLinks = document.querySelectorAll("nav ul li a");
const current = location.pathname.split("/").pop() || "index.html";
navLinks.forEach(a => {
  if (a.getAttribute("href") === current) a.classList.add("active");
});

// ===== Slideshow mit sanftem Fade =====
let slideIndex = 0;
let autoTimer = null;

function setupSlides() {
  const slides = document.getElementsByClassName("slide");
  const dots   = document.getElementsByClassName("dot");
  if (!slides.length) return;

  // Alle verstecken
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // Aktuelle zeigen
  slides[slideIndex].classList.add("show");
  if (dots[slideIndex]) dots[slideIndex].classList.add("active");
}

function plusSlides(n) {
  const slides = document.getElementsByClassName("slide");
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  setupSlides();
  restartAuto();
}

function currentSlide(n) {
  slideIndex = n - 1;
  setupSlides();
  restartAuto();
}

function startAuto() {
  stopAuto();
  autoTimer = setInterval(() => plusSlides(1), 5000);
}
function stopAuto() {
  if (autoTimer) clearInterval(autoTimer);
}
function restartAuto() {
  startAuto();
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.getElementsByClassName("slide");
  if (slides.length) {
    slideIndex = 0;
    setupSlides();
    startAuto();
  }
});
