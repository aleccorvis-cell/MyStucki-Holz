document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------
       1. SCROLL REVEAL (Apple-Style Animation)
       -------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal');

    // Wir nutzen IntersectionObserver für performantes Scroll-Tracking
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Beobachtung beenden, damit die Animation nur 1x läuft
                observer.unobserve(entry.target); 
            }
        });
    }, {
        root: null,
        threshold: 0.1, // Element muss zu 10% sichtbar sein, bevor Animation startet
        rootMargin: '0px' 
    });

    revealElements.forEach(el => revealObserver.observe(el));


    /* --------------------------------------------------
       2. MOBILE MENU
       -------------------------------------------------- */
    const menuBtn = document.querySelector('.mobile-toggle');
    const mobileNav = document.querySelector('.mobile-nav-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-overlay a');

    if (menuBtn && mobileNav) {
        // Menü öffnen/schließen
        menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            
            // Animation für den Hamburger-Button (optional, falls CSS erweitert wird)
            menuBtn.classList.toggle('is-open'); 
        });

        // WICHTIG: Menü schließen, wenn ein Link geklickt wird
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                menuBtn.classList.remove('is-open');
            });
        });
    }


    /* --------------------------------------------------
       3. COOKIE BANNER
       -------------------------------------------------- */
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    // Prüfen, ob bereits eine Entscheidung getroffen wurde
    if (cookieBanner && !localStorage.getItem('cookieConsent')) {
        // Banner mit kleiner Verzögerung einfahren lassen
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    // Funktion zum Schließen des Banners (weiche Animation)
    function closeBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
            // Nach der CSS-Transition (0.3s) ganz ausblenden für Screenreader
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 500); 
        }
    }

    // Akzeptieren
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            // Hier könnte später Google Analytics Code aktiviert werden
            closeBanner();
        });
    }

    // Ablehnen
    if (rejectBtn) {
        rejectBtn.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            closeBanner();
        });
    }

}); // Hier fehlte im Original die schließende Klammer!
