// Sidebar "Show Contacts" toggle
const sidebar = document.getElementById('sidebar');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// Article switching (navbar links)
const navLinks = document.querySelectorAll('[data-nav-link]');
const articles = document.querySelectorAll('article[data-article]');

function showArticle(id) {
  articles.forEach((article) => {
    article.classList.remove('active');
    if (article.dataset.article === id) {
      article.classList.add('active');
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.dataset.navLink === id) {
      link.classList.add('active');
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    showArticle(link.dataset.navLink);
  });
});

// Hash on load (e.g. #resume)
const hash = window.location.hash.slice(1);
if (hash && ['about', 'resume', 'portfolio', 'contact'].includes(hash)) {
  showArticle(hash);
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('[name="name"]').value;
    const email = contactForm.querySelector('[name="email"]').value;
    const message = contactForm.querySelector('[name="message"]').value;
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:Ayethihan01@gmail.com?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}

// Profile image fallback
const profileImg = document.querySelector('.avatar-box img');
if (profileImg) {
  profileImg.addEventListener('error', function () {
    this.src = 'https://ui-avatars.com/api/?name=CHANG+JUI+FANG&size=200&background=2a2a2a&color=e6b422&bold=true';
  });
}
