document.addEventListener('DOMContentLoaded', function() {
    const botonesCategoria = document.querySelectorAll('.categorias button');
    const productos = document.querySelectorAll('.producto');
    const catalogo = document.querySelector('.catalogo'); // O el contenedor de tus productos
  
    botonesCategoria.forEach(boton => {
      boton.addEventListener('click', function() {
        const categoriaSeleccionada = this.dataset.categoria;
  
        productos.forEach(producto => {
          if (categoriaSeleccionada === 'todos' || producto.classList.contains(categoriaSeleccionada)) {
            producto.style.display = 'block'; // O 'flex', 'grid', etc., según tu diseño
          } else {
            producto.style.display = 'none';
          }
        });
  
        // Opcional: Puedes añadir una clase activa al botón seleccionado para resaltarlo
        botonesCategoria.forEach(btn => btn.classList.remove('activo'));
        this.classList.add('activo');
      });
    });
  });