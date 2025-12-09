document.addEventListener('DOMContentLoaded', () => {

  // 1. SCROLL REVEAL (Apple Effekt)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0, rootMargin: '50px' }); // Startet sofort auch für bereits sichtbare Elemente
  
  revealElements.forEach(el => revealObserver.observe(el));

  // Aktiviere Elemente, die bereits beim Laden sichtbar sind
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('active');
    }
  });

  // 2. MOBILE MENU
  const menuBtn = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav-overlay');
  
  if(menuBtn) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  }

  // 3. COOKIE BANNER
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');

  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => cookieBanner.classList.add('show'), 1500);
  }

  if(acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      cookieBanner.classList.remove('show');
    });
  }

  if(rejectBtn) {
    rejectBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'rejected');
      cookieBanner.classList.remove('show');
    });
  }
});
