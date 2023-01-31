const carrito = [];
//identificarse
let usuario = '';
const identificarse  = () => {
    usuario = prompt( 'Ingrese su nombre').toUpperCase();
    alert(`hola ${usuario}, elija el producto que desea comprar`);
    mostrarListaProductos();
}

const mostrarListaProductos = () => {
    const listaDeProductos = productos.map(producto => {
        return `> ID: ${producto.id}    ${producto.nombre}  $${producto.precio}`
    })
    comprarProductos(listaDeProductos)
    
};

const comprarProductos = (listaDeProductos) => {
    let productoId = 0;
    let productoCantidad = 0;
    let otroProducto = false;

    do {
        productoId = prompt('ingrese el ID del producto a comprar'+'\n\n'+listaDeProductos.join('\n'))
        productoCantidad = Number(prompt('Ingrese la cantidad deseada'));

        const producto = productos.find(producto => parseInt(productoId) === producto.id)

        if (producto) {
            agregarAlCarrito(producto, producto.id, productoCantidad)
        } else {
            alert('El ID no existe!')
        }

        otroProducto = confirm('Desea agregar otro producto?')
    } while (otroProducto);
    confirmarCompra();
};

const agregarAlCarrito = (producto, productoId, productoCantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === productoId)
    if (!productoRepetido) {
        producto.cantidad += productoCantidad
        carrito.push(producto)
    } else {
        productoRepetido.cantidad += productoCantidad
    }
};

const eliminarProductoCarrito = (nombreProductoAEliminar) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === nombreProductoAEliminar.toLowerCase()) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaProductos = carrito.map(producto => {
        return '- '+producto.nombre+' | Cantidad: '+producto.cantidad
    })

    const isCheckout = confirm('Checkout: '
        +'\n\n'+listaProductos.join('\n')
        +'\n\nPara continuar presione "Aceptar" sino "Cancelar" para eliminar un producto del carrito'
    )

    if (isCheckout) {
        finalizarCompra(listaProductos)
    } else {
        const nombreProductoAEliminar = prompt('Ingrese el nombre del producto a eliminar:')
        eliminarProductoCarrito(nombreProductoAEliminar)
    }
};

const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
    alert('Detalle de su compra: '
        +'\n\n'+listaProductos.join('\n')
        +'\n\nTotal de productos: '+cantidadTotal
        +'\n\nEl total de su compra es: $ '+precioTotal
        +'\n\nGracias por su compra!'
    )
};



identificarse()