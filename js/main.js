const btnUp = document.getElementById('btnUp');
window.addEventListener('scroll',function(){
    btnUp.classList.toggle('active', window.scrollY > 500)
})
function scrollTotop(){
    window.scrollTo({
        top: 0
    });
}

let boton = document.getElementById("icono")
let enlaces = document.getElementById("enlaces")
let menu = document.getElementById("icon")
let contador = 0;

enlaces.addEventListener("click", function(){
    contador = 0;
    enlaces.classList.remove('dos')
    menu.classList.add('bx-menu')
    menu.classList.remove('bx-x')
    enlaces.className = ('enlaces uno')

});
boton.addEventListener("click", function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos')
        menu.classList.remove('bx-menu')
        menu.classList.add('bx-x')
        contador = 1
    }else{
        enlaces.classList.remove('dos')
        enlaces.className = ('enlaces uno')
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