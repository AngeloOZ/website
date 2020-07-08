const carro = new Carrito();
const btnCarrito = document.getElementById('ver-carrito');
const productos = document.getElementById('contenedor-productos-all');
const listarProductos = document.querySelector('#listado-carrito .contenedor-items');

IniciarProceso();

function IniciarProceso(){
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

}

window.addEventListener('scroll',function(){
    if(window.scrollY > 400){
        btnCarrito.style.opacity = 1;
    }else{
        btnCarrito.style.opacity = 0;
    }   
})