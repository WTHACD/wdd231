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
// Al cargar la página, se asigna la fecha y hora actual al campo de timestamp.
window.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.getElementById('timestamp');
    if (timestampField) {
      timestampField.value = new Date().toISOString();
    }
  
    // Funcionalidad para abrir y cerrar modales.
    const modalLinks = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close');
  
    modalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = 'block';
          // Opcional: enfocar el primer elemento dentro del modal para accesibilidad.
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
  
    // Cierra el modal si el usuario hace clic fuera del contenido
    window.addEventListener('click', (e) => {
      document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });  
