const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.innerHTML = burger.innerHTML === '☰' ? '✖' : '☰';
});

// Smooth scrolling for nav links
const sectionLinks = document.querySelectorAll('.nav-links a');
sectionLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      burger.innerHTML = '☰';
    }
  });
});

// Project card redirection links
const projectLinks = [
  {
    live: 'https://rawcdn.githack.com/AbhinavRaman/Mini-Projects/2e7dd9cdaa35cc438c003126fa7430859e28f4c1/Tailwind-Project/src/index.html'
  },
  {
    live: 'https://rawcdn.githack.com/AbhinavRaman/AmazonClone/cd53aca7ebfa58647cc2c8b4604bf425d7025c05/index.html'
  },
  {
    live: 'https://rawcdn.githack.com/AbhinavRaman/Weather-Web-App/403b93ebaa74e9703f22f863a368531934414d63/index.html'
  },
  {
    live: 'https://rawcdn.githack.com/AbhinavRaman/Mini-Projects/68e6ae3c315fa4d8389c51b16d7b7d2f129a503a/Alarm-Clock-Project/index.html'
  }
];

const projectCards = document.querySelectorAll('.project-grid .project-card');
projectCards.forEach((card, index) => {
  card.style.cursor = 'pointer';
  card.style.transition = 'box-shadow 0.3s ease';
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  });
  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
  });
  card.addEventListener('click', () => {
    window.open(projectLinks[index].live, '_blank');
  });
});

// Certificate image preview on click
const certCards = document.querySelectorAll('.certification-grid .cert-card');
certCards.forEach(card => {
  card.style.cursor = 'pointer';
  card.style.transition = 'box-shadow 0.3s ease';
  card.addEventListener('mouseover', () => {
    card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  });
  card.addEventListener('mouseout', () => {
    card.style.boxShadow = 'none';
  });
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('img').getAttribute('src');
    if (imgSrc) window.open(imgSrc, '_blank');
  });
});

// Animated hero background (simple lines and dots)
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('.hero-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, points;
  const POINTS = 32;
  const LINE_DIST = 160;
  const DOT_COLOR = '#38bdf8';
  const LINE_COLOR = 'rgba(56,189,248,0.18)';

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = document.querySelector('.hero').offsetHeight;
    points = Array.from({length: POINTS}, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    // Draw lines
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINE_DIST) {
          ctx.strokeStyle = LINE_COLOR;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }
    // Draw dots
    for (const p of points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = DOT_COLOR;
      ctx.fill();
    }
  }

  function animate() {
    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
    draw();
    requestAnimationFrame(animate);
  }

  resize();
  animate();
  window.addEventListener('resize', resize);
});