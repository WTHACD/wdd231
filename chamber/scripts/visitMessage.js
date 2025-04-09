const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();

if (!lastVisit) {
  document.querySelector('.sidebar').textContent = 'Welcome! Let us know if you have any questions.';
} else {
  const daysSinceLastVisit = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));

  if (daysSinceLastVisit < 1) {
    document.querySelector('.sidebar').textContent = 'Back so soon! Awesome!';
  } else if (daysSinceLastVisit === 1) {
    document.querySelector('.sidebar').textContent = 'You last visited one day ago.';
  } else {
    document.querySelector('.sidebar').textContent = `You last visited ${daysSinceLastVisit} days ago.`;
  }
}

localStorage.setItem('lastVisit', currentVisit);
