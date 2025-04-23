const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  burger.innerHTML = burger.innerHTML === '☰' ? '✖' : '☰';
});

// Smooth scrolling for nav links
const sectionLinks = document.querySelectorAll('.sections a');
sectionLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      burger.innerHTML = '☰';
    }
  });
});

//Resume Buttons
document.getElementById('viewResume').addEventListener('click', () => {
  window.open('./Assets/Abhinav_Raman_Resume.pdf', '_blank');
});

document.getElementById('downloadResume').addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = './Assets/Abhinav_Raman_Resume.pdf';
  link.download = 'Abhinav_Raman_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


// Project card redirection links
const projectLinks = [
  {
    github: 'https://github.com/AbhinavRaman/AmazonClone',
    live: 'https://rawcdn.githack.com/AbhinavRaman/AmazonClone/cd53aca7ebfa58647cc2c8b4604bf425d7025c05/index.html'
  },
  {
    github: 'https://github.com/AbhinavRaman/Weather-Web-App',
    live: 'https://your-live-link.com/weather-app'
  },
  {
    github: 'https://github.com/AbhinavRaman/Mini-Projects/tree/main/Alarm-Clock-Project',
    live: 'https://your-live-link.com/alarm-clock'
  },
  {
    github: 'https://github.com/AbhinavRaman/Dentitech-Landing-Page',
    live: 'https://your-live-link.com/dentitech-landing-page'
  }
];

const projectCards = document.querySelectorAll('.pcards .cards');
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
    window.open(projectLinks[index].github, '_blank');
    setTimeout(() => {
      window.open(projectLinks[index].live, '_blank');
    }, 200);
  });
});

// Certificate image preview on hover
const certBoxes = document.querySelectorAll('.certifications .box');
certBoxes.forEach(box => {
  box.style.cursor = 'pointer';
  box.style.transition = 'box-shadow 0.3s ease';
  box.addEventListener('mouseover', () => {
    box.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  });
  box.addEventListener('mouseout', () => {
    box.style.boxShadow = 'none';
  });
  box.addEventListener('click', () => {
    const imgSrc = box.querySelector('img').getAttribute('src');
    if (imgSrc) window.open(imgSrc, '_blank');
  });
});