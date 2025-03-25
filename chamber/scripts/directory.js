// directory.js

// Espera a que el DOM esté cargado (opcional si usas type="module" y lo pones al final del body)
document.addEventListener('DOMContentLoaded', () => {
    getMemberData();
    
    // Seleccionamos botones y sección donde se inyectará el contenido
    const gridBtn = document.querySelector('#gridBtn');
    const listBtn = document.querySelector('#listBtn');
    const cardsContainer = document.querySelector('#cards');
  
    // Eventos para cambiar la vista
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
   * Función principal que obtiene los datos desde el archivo JSON.
   */
  async function getMemberData() {
    try {
      const response = await fetch('data/members.json');
      if (!response.ok) throw new Error("Error al obtener los datos.");
      
      const data = await response.json();
      displayMembers(data); // Llamamos a la función para mostrarlos en pantalla
    } catch (error) {
      console.error(error);
    }
  }
  
  /**
   * Genera el HTML dinámico para cada miembro y lo inserta en la sección #cards.
   */
  function displayMembers(members) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = ''; // Limpiamos contenido previo si lo hubiera
    
    members.forEach(member => {
      // Crear elementos HTML
      const card = document.createElement('div');
      card.classList.add('member-card');
      
      // Imagen o ícono
      const img = document.createElement('img');
      img.src = member.image;
      img.alt = `Logo de ${member.name}`;
      
      // Nombre
      const name = document.createElement('h3');
      name.textContent = member.name;
      
      // Dirección
      const address = document.createElement('p');
      address.textContent = `Dirección: ${member.address}`;
      
      // Teléfono
      const phone = document.createElement('p');
      phone.textContent = `Tel: ${member.phone}`;
      
      // Sitio web (con enlace)
      const website = document.createElement('a');
      website.href = member.website;
      website.textContent = "Visitar sitio web";
      website.target = "_blank"; // Para abrir en nueva pestaña
      
      // Miembro (membership level)
      const level = document.createElement('p');
      level.textContent = `Nivel de membresía: ${member.membershipLevel}`;
      
      // Descripción (opcional)
      const desc = document.createElement('p');
      desc.textContent = member.description;
      
      // Agregar elementos al card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(level);
      if (member.description) card.appendChild(desc);
      
      // Finalmente, agregar el card al contenedor
      cardsContainer.appendChild(card);
    });
  }
  