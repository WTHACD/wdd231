document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("catalogo");
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (contenedor) {
    fetch("datos/productos.json")
      .then(res => res.json())
      .then(productos => {
        contenedor.innerHTML = productos.map((p, i) => {
          const esFavorito = favoritos.includes(i);
          return `
            <div class="producto fade-in">
              <img src="\${p.imagen}" alt="\${p.nombre}" />
              <h3>\${p.nombre}</h3>
              <p>\${p.descripcion}</p>
              <p><strong>₡\${p.precio.toLocaleString()}</strong></p>
              <button class="fav-btn \${esFavorito ? 'activo' : ''}" data-id="\${i}">
                \${esFavorito ? "❤️" : "🤍"}
              </button>
            </div>
          `;
        }).join("");

        document.querySelectorAll(".fav-btn").forEach(btn => {
          btn.addEventListener("click", e => {
            const id = parseInt(btn.dataset.id);
            const idx = favoritos.indexOf(id);
            if (idx >= 0) {
              favoritos.splice(idx, 1);
            } else {
              favoritos.push(id);
            }
            localStorage.setItem("favoritos", JSON.stringify(favoritos));
            btn.classList.toggle("activo");
            btn.innerHTML = favoritos.includes(id) ? "❤️" : "🤍";
          });
        });
      });
  }
});
