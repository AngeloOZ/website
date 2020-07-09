class Carrito {
    comprarProducto(e) {
        e.preventDefault();
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto)
        }
    }
    leerDatosProducto(producto) {
        const infoProducto = {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h3').textContent,
            precio: producto.querySelector('.precio').textContent,
            id: producto.querySelector('a').getAttribute('data-id'),
            cantidad: producto.querySelector('select').value
        }
        this.insertarCarrito(infoProducto);
    }
    insertarCarrito(producto) {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
                <a href="#" class="bx bxs-x-circle btn-eliminar-prod" data-id="${producto.id}"></a>
                <img src="${producto.imagen}" alt="">
                <div class="textos">
                    <p class="nombre-item">${producto.titulo}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Precio: ${producto.precio}</p>
                </div>
        `;
        listarProductos.appendChild(div);
        this.guardarProductosLocalStorage(producto);
    }
    eliminarProducto(e) {
        e.preventDefault();
        Swal.fire({
            title: '¿Estas seguro de quitar este producto del carrito?',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro'
        }).then((result) => {
            if (result.value) {
                let producto, productoID;
                if (e.target.classList.contains('btn-eliminar-prod')) {
                    e.target.parentElement.remove();
                    producto = e.target.parentElement;
                    productoID = producto.querySelector('a').getAttribute('data-id');
                }
                this.eliminarProductoLocalStorage(productoID);
                Swal.fire(
                    'Borrado!',
                    'Se quitó el producto de tu carrito',
                    'success'
                )
            }
        })
    }

    vaciarCarrito(e) {
        e.preventDefault();
        while (listarProductos.firstChild) {
            listarProductos.removeChild(listarProductos.firstChild);
        }
        this.vaciarLocalStorage();
        return false;
    }
    guardarProductosLocalStorage(producto) {
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }
    obtenerProductosLocalStorage() {
        let productoLS;
        if (localStorage.getItem('productos') === null) {
            productoLS = [];
        } else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }
    leerLocalStorage() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto) {
            const div = document.createElement('div');
            div.classList.add('item');
            div.innerHTML = `
                    <a href="#" class="bx bxs-x-circle btn-eliminar-prod" data-id="${producto.id}"></a>
                    <img src="${producto.imagen}" alt="">
                    <div class="textos">
                        <p class="nombre-item">${producto.titulo}</p>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <p>Precio: ${producto.precio}</p>
                    </div>
            `;
            listarProductos.appendChild(div);
        });
    }
    eliminarProductoLocalStorage(productoID) {
        let productosLS;

        productosLS = this.obtenerProductosLocalStorage();

        productosLS.forEach(function (productoLS, index) {
            if (productoLS.id === productoID) {
                productosLS.splice(index, 1);
            }
        });
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }
    vaciarLocalStorage() {
        localStorage.clear();
    }
}