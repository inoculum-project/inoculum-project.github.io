// Nav scroll effect
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile hamburger
const hamburger = document.querySelector('.nav__hamburger');
const navLinks  = document.querySelector('.nav__links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    // Animate bars
    const bars = hamburger.querySelectorAll('span');
    if (open) {
      bars[0].style.transform = 'translateY(6px) rotate(45deg)';
      bars[1].style.opacity   = '0';
      bars[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    }
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const bars = hamburger.querySelectorAll('span');
      bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
    });
  });
}

// Active nav link
const currentPath = window.location.pathname.replace(/\/$/, '');
document.querySelectorAll('.nav__links a').forEach(a => {
  const href = a.getAttribute('href').replace(/\/$/, '');
  if (href === currentPath || (href !== '' && currentPath.startsWith(href))) {
    a.classList.add('active');
  }
});

// Photo carousel
document.querySelectorAll('.carousel').forEach(carousel => {
  const slides = carousel.querySelectorAll('.carousel__slide');
  const dots   = carousel.querySelectorAll('.carousel__dot');
  let current = 0;
  const show = (i) => {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, j) => s.classList.toggle('active', j === current));
    dots.forEach((d, j) => d.classList.toggle('active', j === current));
    restart();
  };
  // Autoplay every 5s, paused while hovered
  let timer = null;
  let paused = false;
  const restart = () => {
    clearInterval(timer);
    if (!paused) timer = setInterval(() => show(current + 1), 5000);
  };
  carousel.addEventListener('mouseenter', () => { paused = true; clearInterval(timer); });
  carousel.addEventListener('mouseleave', () => { paused = false; restart(); });
  restart();
  carousel.querySelector('.carousel__btn--prev').addEventListener('click', () => show(current - 1));
  carousel.querySelector('.carousel__btn--next').addEventListener('click', () => show(current + 1));
  dots.forEach((d, j) => d.addEventListener('click', () => show(j)));
  // Keyboard and swipe navigation
  carousel.tabIndex = 0;
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
  let startX = null;
  carousel.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  carousel.addEventListener('touchend', e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
    startX = null;
  });
});

// Intersection observer for scroll-reveal
const observerOpts = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOpts);

document.querySelectorAll('.pillar, .team-card, .pub-item, .milestone, .news-card, .objective').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(16px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  revealObserver.observe(el);
});
