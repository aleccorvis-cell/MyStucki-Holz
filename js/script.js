document.addEventListener('DOMContentLoaded', () => {
    console.log('Stuckateur Website geladen.');

    // Hier kommt später der Code für das mobile Menü rein
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            alert('Menü wird geöffnet (Funktion wird noch implementiert)');
            // Hier würde man später eine Klasse 'active' auf die Navigation toggeln
        });
    }
});
