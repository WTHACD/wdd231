//DATE
document.addEventListener('DOMContentLoaded', () => {
 
    const currentYearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");
  
   
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
  });
  //********************************************* */
  //NAV
  document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.getElementById("menuBtn");
	const mainNav = document.getElementById("mainNav");
	
	menuBtn.addEventListener("click", () => {
	  mainNav.classList.toggle("nav-open");
	});
  });
// timestamp.
window.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
      timestampField.value = new Date().toISOString();
    }
  
    // Modals
    const modalLinks = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close');
  
    modalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'block';
          // Optional: focus the first element inside the modal for accessibility.
          const firstFocusable = modal.querySelector('h2');
          if (firstFocusable) firstFocusable.focus();
        }
      });
    });
    
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'none';
        }
      });
    });
    
    // Close the modal if the user clicks outside the content
    window.addEventListener('click', (e) => {
      document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });    
  });  
