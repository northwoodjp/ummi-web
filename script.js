/* ---------- NAVIGATION TOGGLE ---------- */
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}


/* ---------- FADE-IN ANIMATION ON SCROLL ---------- */
const faders = document.querySelectorAll('.fade');
const progress = document.querySelector('.progress');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      // Animate progress bar when it comes into view
      if (entry.target.classList.contains('progress-bar')) {
        progress.style.width = progress.dataset.progress + "%";
      }
    }
  });
}, { threshold: 0.3 });

faders.forEach((el) => observer.observe(el));


/* ---------- COUNTDOWN TIMER ---------- */
const targetDate = new Date("February 15, 2026 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return; // Stop if target date passed

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ---------- MANUAL SLIDER (WAKAF & INFAK) ---------- */
document.querySelectorAll('.slider').forEach(slider => {
  const track = slider.querySelector('.slider-track');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  const card = track.children[0];

  const gap = 16;
  const scrollAmount = card.offsetWidth + gap;

  prev.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});