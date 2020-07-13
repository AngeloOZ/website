const btnUp = document.getElementById('btnUp');
const carrito = document.getElementById('ver-carrito');
let botonMenu = document.getElementById("icono")
let enlaces = document.getElementById("enlaces")
let menu = document.getElementById("icon")
let contador = 0;

function scrollTop(){
    window.addEventListener('scroll',function(){
        if(!(enlaces.classList.contains('activeMenu'))){
            btnUp.classList.toggle('active', window.scrollY > 500)
        }
    })
}
function scrollTotop(){
    window.scrollTo({
        top: 0
    });
}
function MenuResponsive(){
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
}
/* -------------------------------------------------------------------------- */
/*                               Seccion Slider                               */
/* -------------------------------------------------------------------------- */
function slider(){
    let slider = document.querySelector(".slider-cont");

    let sliderIndividual = document.querySelectorAll(".contenido-slider");

    // let puntos = document.getElementsByClassName('punto');
    let puntos = document.querySelectorAll('.punto');
    let contpuntos = 0;
    let contadorSlide = 0;
    let width = sliderIndividual[0].clientWidth;
    let intervalo = 3000;

    window.addEventListener('resize', function(){
        width = sliderIndividual[0].clientWidth;
    })

    setInterval(function(){
        slides();
    }, intervalo);

    function slides(){    
        for(i = 0; i < puntos.length; i++){
            puntos[i].className = puntos[i].className.replace(" activepuntos","");
        }
        slider.style.transform = `translate(${-(width*contadorSlide)}px)`;
        slider.style.transition = "transform .8s";
        puntos[contpuntos].classList.add('activepuntos')
        contadorSlide++;
        contpuntos++;
        if(contadorSlide == sliderIndividual.length){
            setTimeout(function(){
                slider.style.transform = `translate(0px)`;
                slider.style.transition = "transform .0s";
                contadorSlide=1;
            }, 1500);
        }
        if(contpuntos == puntos.length){
            contpuntos = 0;
        }
    }
}