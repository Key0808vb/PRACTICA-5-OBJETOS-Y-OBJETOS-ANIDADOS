// ejercicio 4: CLASE

const tienda = {
    nombre: "Tienda del campo",
    productos: {
        campo: {
            nombre: "carton de huevos",
            stock: 5,
            precio: 7.5
        },
        celulares: {
            nombre: "Samsung s22+",
            stock: 10,
            precio: 450
        }
    }
}

console.log("\n\n\nNombre del producto: ", tienda.productos.celulares.nombre)
console.log("Precio del producto: $", tienda.productos.celulares.precio)
console.log("Cantidad de stock restante: ", tienda.productos.celulares.stock -1)
