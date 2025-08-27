// Load content from JSON
fetch('data/content.json')
    .then(response => response.json())
    .then(data => {
        displayContent('anime-grid', data.anime);
        displayContent('films-grid', data.films);
        displayContent('drama-grid', data.drama);
    })
    .catch(err => console.error('Error loading content:', err));

// Function to display cards
function displayContent(gridId, items) {
    const grid = document.getElementById(gridId);
    if (!grid || !items) return;

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${item.poster}" alt="${item.title}">
            <h3>${item.title}</h3>
        `;

        // Optional: click to open link
        card.addEventListener('click', () => {
            if (item.link) window.open(item.link, '_blank');
        });

        grid.appendChild(card);
    });
}
