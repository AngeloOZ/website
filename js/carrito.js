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
        this.calcularTotal();
    }
    eliminarProducto(e) {
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains('btn-eliminar-prod')) {
            Swal.fire({
                title: '¿Estas seguro de quitar este producto del carrito?',
                text: "No podrás revertir esto",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, estoy seguro',
                cancelButtonText: 'Cancelar'

            }).then((result) => {
                if (result.value) {
                    e.target.parentElement.remove();
                    producto = e.target.parentElement;
                    productoID = producto.querySelector('a').getAttribute('data-id');
                    Swal.fire(
                        'Borrado!',
                        'Se quitó el producto de tu carrito',
                        'success'
                    );
                    this.eliminarProductoLocalStorage(productoID);
                    this.calcularTotal();
                }
            })
        }
    }
    vaciarCarrito(e) {
        e.preventDefault();
        Swal.fire({
            title: '¿Estas Seguro de vaciar el Carrito?',
            text: "No se puede revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciar carrito',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                while (listarProductos.firstChild) {
                    listarProductos.removeChild(listarProductos.firstChild);
                }
                this.vaciarLocalStorage();
                this.calcularTotal();
                Swal.fire(
                    'Borrado!',
                    'Tu carrito ahora está vacío.',
                    'success'
                )
            }
        })
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
        this.calcularTotal();
    }
    leerLocalStorageCompra() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width="80px" height="90px" alt="">
                </td>
                <td>${producto.titulo}</td>            
                <td>${producto.precio}</td>            
                <td>${producto.cantidad}</td>
                <td>$${(producto.precio.replace('$','') * producto.cantidad).toFixed(2)}</td>
                <td>
                    <a href="#" class="borrar-producto fa fa-times-circle" style="font-size: 30px" data-id=${producto.id}></a>
                </td>            
            `;
            listaCompra.appendChild(row);
        });
        this.calcularTotal();
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
    calcularTotal() {
        let productosLS;
        let total = 0;
        productosLS = this.obtenerProductosLocalStorage();
        for (let i = 0; i < productosLS.length; i++) {
            let element = Number(productosLS[i].precio.replace('$', '').replace(',', '.') * productosLS[i].cantidad.replace('$', '').replace(',', '.'));
            total += element;
        }
        etiquetaPrecio.innerHTML = `$${total.toFixed(2)}`;
        if(total != 0){
            btnCarrito.style.opacity = 1;
        }else{
            btnCarrito.style.opacity = 0;
        }
    }
    procesarPedido(e){
        e.preventDefault();
        if(this.obtenerProductosLocalStorage().length === 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tu carrito está vacío!',
                timer: 2000,
                showConfirmButton: false
            })
        }else{
            location.href = 'compra.html'
        }
    }
    prepararPedido(e) {
        e.preventDefault();
        let total;
        total = etiquetaPrecio.textContent;
        if (total.replace('$', '') == '0.00') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tu carrito está vacío!',
            })
        } else {
            let productosLS;
            let pedido = '';
            let enlace = 'https://api.whatsapp.com/send?phone=593983361683&text='
            productosLS = this.obtenerProductosLocalStorage();
            productosLS.forEach(function (producto) {
                let total = Number(producto.precio.replace('$', '') * producto.cantidad.replace('$', ''));
                pedido += `------------------------------------\n`;
                pedido += `Nombre: ${producto.titulo}\nCantidad: ${producto.cantidad}\nPrecio: ${producto.precio}\nTotal: $${total.toFixed(2)}\n`;
                pedido += `------------------------------------\n`;
            });
            pedido += `Total: ${etiquetaPrecio.textContent}`
            let textoenlace = pedido.replace(/\n/gi, '%0d%0a').replace(/:/gi, '%3a').replace(/ /gi, '%20').replace(/$/gi, '%24');
            enlace += textoenlace;
            Swal.fire({
                title: 'Su pedido',
                text: "fue procesado",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'OK'
            }).then((result) => { 
                Email.send({
                    SecureToken: "d9afeb1f-9fa4-480a-8ca6-536386657557",
                    To: "angelo-mjz7@hotmail.com",
                    From: "nutrimixsec@gmail.com",
                    Subject: "Nuevo Pedido",
                    Body: pedido
                }).then(
                    console.log('Hola')
                );
                setTimeout(function(){
                    window.location.reload();
                },2000);
                window.open(enlace,'_blank');
                this.vaciarLocalStorage();
            })
        }
    }
}