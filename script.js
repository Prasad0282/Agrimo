// ═══════════════════════════════════════════
// SERVICES CAROUSEL CONTROLLERS
// ═══════════════════════════════════════════
const servicesTrack = document.getElementById("servicesTrack");
const servicesDots = document.querySelectorAll("#servicesDots .dot");

servicesDots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = parseInt(e.target.getAttribute("data-index"));

    // Remove active from all dots
    servicesDots.forEach((d) => d.classList.remove("active"));
    e.target.classList.add("active");

    // Calculate offset percentage (responsive)
    let offset = 0;
    const width = window.innerWidth;
    if (width > 1200) {
      offset = index * 25;
    } else if (width > 900) {
      offset = index * 33.333;
    } else if (width > 600) {
      offset = index * 50;
    } else {
      offset = index * 100;
    }

    servicesTrack.style.transform = `translateX(-${offset}%)`;
  });
});

// ═══════════════════════════════════════════
// TESTIMONIALS SLIDER CONTROLLERS
// ═══════════════════════════════════════════
const testiTrack = document.getElementById("testiTrack");
const testiPrev = document.getElementById("testiPrev");
const testiNext = document.getElementById("testiNext");
let testiIndex = 0;

const getTestimonialsPerView = () => {
  const width = window.innerWidth;
  if (width > 991) return 3;
  if (width > 650) return 2;
  return 1;
};

const updateTestimonialsPosition = () => {
  const perView = getTestimonialsPerView();
  const cardWidth = 100 / perView;
  testiTrack.style.transform = `translateX(-${testiIndex * cardWidth}%)`;
};

testiNext.addEventListener("click", () => {
  const maxIndex = 3 - getTestimonialsPerView();
  if (testiIndex < maxIndex) {
    testiIndex++;
  } else {
    testiIndex = 0;
  }
  updateTestimonialsPosition();
});

testiPrev.addEventListener("click", () => {
  if (testiIndex > 0) {
    testiIndex--;
  } else {
    testiIndex = 3 - getTestimonialsPerView();
  }
  updateTestimonialsPosition();
});

// window.addEventListener("resize", () => {
//   testiIndex = 0;
//   updateTestimonialsPosition();
// });
// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });
