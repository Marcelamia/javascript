class Producto {
    constructor(id, nombre, precio, color) {
        this.id = parseInt(id);
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.color  = color.toUpperCase();
        this.cantidad = 0;
        this.disponible = true;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    sinStock() {
        this.disponible = false;
    }
}
const producto1 = new Producto( 1, 'nombre1', '50', 'amarillo');
const producto2 = new Producto( 2, 'nombre2', '40', 'azul');
const producto3 = new Producto( 3, 'nombre3', '30', 'blanco');
const producto4 = new Producto( 4, 'nombre4', '20', 'celeste');
const producto5 = new Producto( 5, 'nombre5', '10', 'dorado');

const productos = [ producto1, producto2, producto3, producto4, producto5 ];



console.log(productos)
productos.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return -1;
    }
    if (a.name < b.name) {
        return 1;
    }
    // a es igual a b
    return 0;
})
console.log(productos)

