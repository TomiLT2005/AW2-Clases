import { productos } from "./productos.mjs"


// Trae todos los productos
export function obtenerProductos(req,res){
    res.json(productos)
}


// Trae los productos por un ID especifico
export function obtenerProductoPorID(req,res){
    
    // Obtener id
    const id = Number(req.params.id) // tener en cuenta el tipo de dato para comparar

    // Filtrar
    const productosFiltrados = productos.datos.filter((producto) => Number(producto.id) === id)

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


// Dar de Alta un producto
// se puede crear una constante para ultimoID
export function nuevoProducto(req,res){

    const producto = req.body
    const productoFinal = {
        id: productos.ultimo_id + 1,
        ...producto
    }

    
    productos.datos.push(productoFinal)

    productos.ultimo_id = productos.ultimo_id + 1

    //responder
    res.status(201).json({mensaje:'Producto creado correctamente'})

}


// Actualizar Producto
export function actualizarProducto(req,res){
    
    // Obtener Id
    const id = Number(req.params.id) // tener en cuenta el tipo de dato para comparar

    // Necesitamos los datos del producto a modificar
    const nuevoProducto = req.body

    // Actualizar 
    productos.datos.map((producto)=>{

        // Necesitamos saber la ubicacion dentro del arreglo del producto que queremos modificar
        // Necesitamos indice
        if(Number(producto.id) === id){
            const indice = productos.datos.indexOf(producto)
            console.log(productos.datos[indice])

            // accedemos al indice
            productos.datos[indice] = {
                id: id,
                ...nuevoProducto
            }
        }
        
    })
    res.json({mensaje:'Producto modificado correctamente con el id:' + id})
}


// Elimina producto por un ID especifico
export function eliminarProductoPorID(req,res){
    
    // Obtener numero
    const id = Number(req.params.id) // tener en cuenta el tipo de dato para comparar

    // Filtrar
    const productosFiltrados = productos.datos.filter((producto) => Number(producto.id) !== id)
    
    // se borra los productos elgido y se actualiza de nuevo
    productos.datos.length = 0
    productos.datos.push(productosFiltrados)

    // Mensaje
    const respuesta  = {

        datos: 'Producto eliminado',  // <--- productosFiltrados
        status: 200,
        url: '/api/v1/productos/' + id,
        verbo: 'DELETE'

    }
    res.json(respuesta)
    console.log(productosFiltrados)
    
}


