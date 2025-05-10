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


// Project card redirection links
const projectLinks = [
  {
    // github: 'https://github.com/AbhinavRaman/AmazonClone',
    live: 'https://rawcdn.githack.com/AbhinavRaman/AmazonClone/cd53aca7ebfa58647cc2c8b4604bf425d7025c05/index.html'
  },
  {
    // github: 'https://github.com/AbhinavRaman/Weather-Web-App',
    live: 'https://rawcdn.githack.com/AbhinavRaman/Weather-Web-App/403b93ebaa74e9703f22f863a368531934414d63/index.html'
  },
  {
    // github: 'https://github.com/AbhinavRaman/Mini-Projects/tree/main/Alarm-Clock-Project',
    live: 'https://rawcdn.githack.com/AbhinavRaman/Mini-Projects/68e6ae3c315fa4d8389c51b16d7b7d2f129a503a/Alarm-Clock-Project/index.html'
  },
  {
    // github: 'https://github.com/AbhinavRaman/Mini-Projects/blob/main/To-do-List%20Project/index.html',
    live: 'https://rawcdn.githack.com/AbhinavRaman/Mini-Projects/68e6ae3c315fa4d8389c51b16d7b7d2f129a503a/To-do-List%20Project/index.html'
  },
  {
    // github: 'https://github.com/AbhinavRaman/Dentitech-Landing-Page',
    live: 'https://rawcdn.githack.com/AbhinavRaman/Dentitech-Landing-Page/f65b3468126e160ea42f8ae6616811a5bc22a9ff/index.html'
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
    window.open(projectLinks[index].live, '_blank');
    // setTimeout(() => {
    //   window.open(projectLinks[index].live, '_blank');
    // }, 200);
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


//form submission
const form = document.getElementById('contactForm');
const popup = document.getElementById('popup');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      popup.style.display = 'block';
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  }).catch(error => {
    alert("Error occurred while sending the message.");
  });
});