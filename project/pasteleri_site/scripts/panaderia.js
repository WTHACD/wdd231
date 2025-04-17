// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada');
    localStorage.setItem('visita', '1');
    cargarProductos();
});

async function cargarProductos() {
    const contenedor = document.getElementById('catalogo');
    if (!contenedor) return;

    try {
        const respuesta = await fetch('data/productos.json');
        const productos = await respuesta.json();

        productos.forEach(prod => {
            const div = document.createElement('div');
            div.classList.add('producto');

            div.innerHTML = `
                <img src="${prod.imagen}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <p>${prod.descripcion}</p>
                <p><strong>₡${prod.precio}</strong></p>
            `;

            contenedor.appendChild(div);
        });
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}
