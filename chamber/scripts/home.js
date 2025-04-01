const membershipLevels = {1:'Member', 2:'Silver', 3:'Gold'};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('/data/members.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const members = await response.json();
    showSpotlights(members.filter(m => m.membershipLevel >= 2));
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('spotlights').innerHTML = 
      '<p class="error">⚠️ Error loading members</p>';
  }
});

function showSpotlights(eligibleMembers) {
  const container = document.getElementById('spotlights');
  const selectedMembers = getRandomMembers(eligibleMembers, 3);
  
  container.innerHTML = selectedMembers.map(member => `
    <div class="spotlight-card">
      <img src="${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>📍 ${member.address}</p>
      <p>📞 ${member.phone}</p>
      <a href="${member.website}" target="_blank">🌐 Visit website</a>
      <div class="badge ${membershipLevels[m.membershipLevel].toLowerCase()}">
        ${membershipLevels[member.membershipLevel]}
      </div>
    </div>
  `).join('');
}

function getRandomMembers(arr, max) {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, max);
}
