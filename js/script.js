document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menü Elemente auswählen
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav-overlay');

    // Klick-Event hinzufügen
    if(menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            // Die Klasse 'active' hinzufügen oder entfernen
            mobileNav.classList.toggle('active');
            
            // Optional: Button Animation (zum X werden)
            // Hier könnte man später CSS Animationen triggern
        });

        // Menü schließen, wenn man auf einen Link klickt
        const links = mobileNav.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
            });
        });
    }

    console.log('Design: Apple-Style loaded.');
});
