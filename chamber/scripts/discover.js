// Function to load data from the JSON file and generate cards
async function loadCards() {
  try {
    const response = await fetch('data/escazu-places.json');
    if (!response.ok) throw new Error("Failed to load the JSON file");

    const data = await response.json();
    const container = document.getElementById('cards-container');

    data.forEach(place => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <figure>
          <img src="${place.image}" alt="${place.name}" loading="lazy" />
        </figure>
        <div class="card-content">
          <h2>${place.name}</h2>
          <address>${place.address}</address>
          <p>${place.description}</p>
          <button onclick="alert('Thank you for your interest in ${place.name}!')">More Info</button>
        </div>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error("Error loading cards:", error);
  }
}

// Function to manage last visit message using localStorage
function showVisitMessage() {
  const messageBox = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const currentVisit = new Date();

  if (lastVisit) {
    const previousDate = new Date(lastVisit);
    const daysDiff = Math.floor((currentVisit - previousDate) / (1000 * 60 * 60 * 24));
    messageBox.textContent = `Welcome back! Your last visit was ${daysDiff} day(s) ago.`;
  } else {
    messageBox.textContent = "Welcome for the first time! We hope you enjoy discovering Escazú.";
  }

  // Save current date
  localStorage.setItem("lastVisit", currentVisit.toISOString());
}

// Run functions on DOM load
document.addEventListener("DOMContentLoaded", () => {
  loadCards();
  showVisitMessage();
});
