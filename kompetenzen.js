document.addEventListener('DOMContentLoaded', function() {
    // Alle Karten beim Laden der Seite anzeigen
    const cards = document.querySelectorAll('.card_skill');
    const dropdown = document.getElementById('category_select');

    dropdown.addEventListener('change', function() {
        const selectedCategory = dropdown.value;

        cards.forEach(card => {
            const cardTitle = card.querySelector('h3').innerText.toLowerCase();

            if (selectedCategory === 'all' || cardTitle === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});