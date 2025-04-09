document.addEventListener('DOMContentLoaded', () => {
    fetch('data/items.json')
      .then(response => response.json())
      .then(data => {
        const cardsContainer = document.getElementById('cards');
        data.forEach((item, index) => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.style.gridArea = `card${index + 1}`;
          
          card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
              <img src="${item.image}" alt="${item.name}" />
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
          `;
          
          cardsContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching the JSON data:', error));
  });
  