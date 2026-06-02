const loader = document.getElementById('loader');
const openBtn = document.getElementById('openInvitation');
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

let isPlaying = false;

openBtn.addEventListener('click', async () => {
  loader.classList.add('hidden');
  try {
    await music.play();
    isPlaying = true;
    musicBtn.textContent = '❚❚';
  } catch (error) {
    isPlaying = false;
    musicBtn.textContent = '♫';
  }
});

musicBtn.addEventListener('click', async () => {
  if (isPlaying) {
    music.pause();
    isPlaying = false;
    musicBtn.textContent = '♫';
  } else {
    try {
      await music.play();
      isPlaying = true;
      musicBtn.textContent = '❚❚';
    } catch (error) {
      alert('Agrega un archivo llamado musica.mp3 para activar la música.');
    }
  }
});

const eventDate = new Date('2026-07-25T15:45:00-06:00').getTime();
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
  const now = Date.now();
  const distance = eventDate - now;

  if (distance <= 0) {
    daysEl.textContent = '0';
    hoursEl.textContent = '0';
    minutesEl.textContent = '0';
    secondsEl.textContent = '0';
    return;
  }

  daysEl.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  hoursEl.textContent = Math.floor((distance / (1000 * 60 * 60)) % 24);
  minutesEl.textContent = Math.floor((distance / (1000 * 60)) % 60);
  secondsEl.textContent = Math.floor((distance / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
