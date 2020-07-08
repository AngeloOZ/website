class Carrito{
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
            console.log('producto: ', producto);
        }
    }
    
    
    
    formato(){
        const div = document.createElement('div');
        div.classList.add('item') ;
        div.innerHTML = `
    
                <img src="./img/producto1.jpg" alt="">
                <div class="textos">
                    <p class="nombre-item">Granola 200gr</p>
                    <p>$0.99</p>
                </div>
        `;
        listarProductos.appendChild(div);
    }
    
}
