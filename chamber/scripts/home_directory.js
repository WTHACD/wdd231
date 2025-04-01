document.addEventListener('DOMContentLoaded', () => {
    getMemberData();
    // View toggle logic remains unchanged
});

async function getMemberData() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error("Error fetching data.");
        const data = await response.json();
        
        // Filter Gold (3) and Silver (2) members
        const eligibleMembers = data.filter(member => 
            member.membershipLevel === 2 || member.membershipLevel === 3
        );
        
        // Random selection of 2-3 members
        const spotlights = getRandomMembers(eligibleMembers, 2, 3);
        
        displaySpotlights(spotlights);
    } catch (error) {
        console.error(error);
    }
}

function getRandomMembers(members, min=2, max=3) {
    // Shuffle array using Fisher-Yates algorithm
    const shuffled = [...members].sort(() => 0.5 - Math.random());
    
    // Get random count between min-max
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

function displaySpotlights(members) {
    const container = document.getElementById('cards');
    container.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card spotlight';
        
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p class="address">${member.address}</p>
            <p class="phone">${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p class="membership">${mapMembershipLevel(member.membershipLevel)} Member</p>
            ${member.description ? `<p class="description">${member.description}</p>` : ''}
        `;
        
        container.appendChild(card);
    });
}

// Existing membership mapping function
function mapMembershipLevel(level) {
    return ['Member', 'Silver', 'Gold'][level-1] || 'Unknown';
}
