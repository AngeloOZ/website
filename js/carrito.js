class Carrito{
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
            console.log('producto: ', producto);
            this.leerDatosProducto(producto)
        }
    }
    leerDatosProducto(producto){
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h3').textContent,
            precio: producto.querySelector('.precio').textContent,
            id : producto.querySelector('a').getAttribute('data-id'),
            cantidad : producto.querySelector('input').value
        }
        this.insertarCarrito(infoProducto);   
     }
     insertarCarrito(producto){
        const div = document.createElement('div');
        div.classList.add('item') ;
        div.innerHTML = `
                <a href="#" class="bx bxs-x-circle btn-eliminar-prod"></a>
                <img src="${producto.imagen}" alt="">
                <div class="textos">
                    <p class="nombre-item">${producto.titulo}</p>
                    <p>cant: ${producto.cantidad} x ${producto.precio}</p>
                </div>
        `;
        listarProductos.appendChild(div);
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
