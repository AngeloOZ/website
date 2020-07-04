const btnUp = document.getElementById('btnUp');

window.addEventListener('scroll',function(){
    btnUp.classList.toggle('active', window.scrollY > 500)
})

function scrollTotop(){
    window.scrollTo({
        top: 0
    });
}