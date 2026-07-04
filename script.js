
// ===== TIMER =====
const targetDate = new Date("2026-08-30T00:00:00");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateTimer() {
  const now = new Date();
  const diff = targetDate - now;

  // Если дата прошла — показываем нули и останавливаем таймер (чтобы не было отрицательных чисел)
  if (diff <= 0) {
    if (daysEl) daysEl.textContent = "0";
    if (hoursEl) hoursEl.textContent = "0";
    if (minutesEl) minutesEl.textContent = "0";
    if (secondsEl) secondsEl.textContent = "0";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (daysEl) daysEl.textContent = days;
  if (hoursEl) hoursEl.textContent = hours;
  if (minutesEl) minutesEl.textContent = minutes;
  if (secondsEl) secondsEl.textContent = seconds;
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// ===== REVEAL ON SCROLL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ===== PARALLAX =====
const starsLayer = document.querySelector(".stars");
const dustLayer = document.querySelector(".dust");

if (starsLayer || dustLayer) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    if (starsLayer) {
      starsLayer.style.transform = `translate(${x}px, ${y}px)`;
    }
    if (dustLayer) {
      dustLayer.style.transform = `translate(${-x}px, ${-y}px)`;
    }
  });
}
