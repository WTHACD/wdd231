// Waits for the DOM to be loaded (optional if you use type="module" and place it at the end of the body)
document.addEventListener('DOMContentLoaded', () => {
  getMemberData();
  
  // Select buttons and section where content will be injected
  const gridBtn = document.querySelector('#gridBtn');
  const listBtn = document.querySelector('#listBtn');
  const cardsContainer = document.querySelector('#cards');

  // Events to change the view
  gridBtn.addEventListener('click', () => {
    cardsContainer.classList.remove('list-view');
    cardsContainer.classList.add('grid-view');
  });

  listBtn.addEventListener('click', () => {
    cardsContainer.classList.remove('grid-view');
    cardsContainer.classList.add('list-view');
  });
});

/**
* Main function to fetch data from the JSON file.
*/
async function getMemberData() {
  try {
      const response = await fetch('data/members.json');
      if (!response.ok) throw new Error("Error fetching data.");
      
      const data = await response.json();
      displayMembers(data); // Call the function to display them on screen
  } catch (error) {
      console.error(error);
  }
}

/**
* Generates dynamic HTML for each member and inserts it into the #cards section.
*/
function displayMembers(members) {
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = ''; // Clear previous content if any
  
  members.forEach(member => {
      // Create HTML elements
      const card = document.createElement('div');
      card.classList.add('member-card');
      
      // Image or icon
      const img = document.createElement('img');
      img.src = member.image;
      img.alt = `Logo of ${member.name}`;
      
      // Name
      const name = document.createElement('h3');
      name.textContent = member.name;
      
      // Address
      const address = document.createElement('p');
      address.textContent = `Address: ${member.address}`;
      
      // Phone
      const phone = document.createElement('p');
      phone.textContent = `Phone: ${member.phone}`;
      
      // Website (with link)
      const website = document.createElement('a');
      website.href = member.website;
      website.textContent = "Visit Website";
      website.target = "_blank"; // To open in a new tab
      
      // Membership Level
      const level = document.createElement('p');
      level.textContent = `Membership Level: ${mapMembershipLevel(member.membershipLevel)}`;
      
      // Description (optional)
      const desc = document.createElement('p');
      desc.textContent = member.description;
      
      // Add elements to the card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(level);
      if (member.description) card.appendChild(desc);
      
      // Finally, add the card to the container
      cardsContainer.appendChild(card);
  });
}

/**
* Maps membership levels from numbers to text.
*/
function mapMembershipLevel(level) {
  switch (level) {
      case 1:
          return "Member";
      case 2:
          return "Silver";
      case 3:
          return "Gold";
      default:
          return "Unknown";
  }
}
