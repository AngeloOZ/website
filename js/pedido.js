const carro = new Carrito();
const btnCarrito = document.getElementById('ver-carrito');
const productos = document.getElementById('contenedor-productos');
const listarProductos = document.querySelector('#listado-carrito .contenedor-items');





window.addEventListener('scroll',function(){
    if(window.scrollY > 500){
        console.log("hola");
        btnCarrito.style.opacity = 1;
    }else{
        btnCarrito.style.opacity = 0;
    }   
})