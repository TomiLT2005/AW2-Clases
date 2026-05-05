import { productos } from "./productos.mjs"


// Trae todos los productos
export function obtenerProductos(req,res){
    res.json(productos)
}


// Trae los productos por un ID especifico
export function obtenerProductoPorID(req,res){
    
    // Obtener numero
    const id = Number(req.params.id) // tener en cuenta el tipo de dato para comparar

    // Filtrar
    const productosFiltrados = productos.filter((producto) => Number(producto.id) === id)

    // Mensajes si lo encontró o no
    if(productosFiltrados.length > 0){

        const respuesta  = {
            datos: productosFiltrados,
            status: 200,
            url: '/api/v1/productos/' + id

        }
        res.json(respuesta)
    }
    else{
        res.status(404)
        res.json({"mensaje":"Producto no encontrado"})
    }
}


// Elimina producto por un ID especifico
export function eliminarProductoPorID(req,res){
    
    // Obtener numero
    const id = Number(req.params.id) // tener en cuenta el tipo de dato para comparar

    // Filtrar
    const productosFiltrados = productos.filter((producto) => Number(producto.id) !== id)
    
    // se borra los productos elgido y se actualiza de nuevo
    productos.length = 0
    productos.push(productosFiltrados)

    // Mensaje
    const respuesta  = {

        datos: productosFiltrados,
        status: 200,
        url: '/api/v1/productos/' + id,
        verbo: 'DELETE'

    }
    res.json(respuesta)
    
}