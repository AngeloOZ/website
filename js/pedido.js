const carro = new Carrito();
const btnCarrito = document.getElementById('ver-carrito');
const productos = document.getElementById('contenedor-productos-all');
const listarProductos = document.querySelector('#listado-carrito .contenedor-items');
const btnVaciarCarrito = document.getElementById('vaciar-carrito');
const etiquetaPrecio = document.getElementById('valor-total');
const btnRealizarPedido = document.getElementById('realizar-pedido');

IniciarProceso();

function IniciarProceso() {
    productos.addEventListener('click', (e) => {
        carro.comprarProducto(e)
    });

    listarProductos.addEventListener('click', (e) => {
        carro.eliminarProducto(e)
    });

    btnVaciarCarrito.addEventListener('click', (e) => {
        carro.vaciarCarrito(e)
    });

    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    btnRealizarPedido.addEventListener('click', (e) => {
        carro.prepararPedido(e)
    });
}

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        btnCarrito.style.opacity = 1;
    } else {
        btnCarrito.style.opacity = 0;
    }
})