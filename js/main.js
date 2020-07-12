const btnUp = document.getElementById('btnUp');
const carrito = document.getElementById('ver-carrito');
let botonMenu = document.getElementById("icono")
let enlaces = document.getElementById("enlaces")
let menu = document.getElementById("icon")
let contador = 0;

window.addEventListener('scroll',function(){
    if(!(enlaces.classList.contains('activeMenu'))){
        btnUp.classList.toggle('active', window.scrollY > 500)
    }
})
function scrollTotop(){
    window.scrollTo({
        top: 0
    });
}
enlaces.addEventListener("click", function(){
    contador = 0;
    enlaces.classList.toggle('activeMenu');
    botonMenu.style.position = "absolute";
    menu.classList.add('bx-menu')
    menu.classList.remove('bx-x')
});
botonMenu.addEventListener("click", function(){
    if(contador == 0){
        botonMenu.style.position = "fixed";
        enlaces.classList.toggle('activeMenu');
        menu.classList.remove('bx-menu')
        menu.classList.add('bx-x')
        contador = 1
    }else{
        botonMenu.style.position = "absolute"
        enlaces.classList.toggle('activeMenu');
        menu.classList.add('bx-menu')
        menu.classList.remove('bx-x')
        contador = 0
    }
})
window.addEventListener('resize',function(){
    if(screen.width > 750){
        contador = 0;
        enlaces.classList.remove('dos')
        enlaces.className = ('enlaces uno')
        menu.classList.add('bx-menu')
        menu.classList.remove('bx-x')
    }    
})