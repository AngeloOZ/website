const carrito = document.getElementById('ver-carrito');
window.addEventListener('scroll',function(){
    if(window.scrollY > 500){
        console.log("hola");
        carrito.style.opacity = 1;
    }else{
        carrito.style.opacity = 0;
    }   
})