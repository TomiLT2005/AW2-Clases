import * as modelo from './modelo.productos.mjs'

export function obtenerTodos(req,res){
    // obtenemos de capa modelo la funcion
    const productos = modelo.obtenerTodos()
    res.json(productos)
}


export function obtenerUno(req,res){
    // aca recien se obtiene el parametro del cliente
    const id_producto = req.params.id
    // ejecutamos la funcion importada desde modelo
    const producto = modelo.obtenerUno(id_producto) // le paso como parametro a la funcion

    if(producto.length > 0 ){
        res.json(producto)
    }
    else{
        res.status(404).json({mensaje:'Producto no encontrado'})
    }
}   


export function EliminarUno(req,res){
    // aca recien se obtiene el parametro del cliente
    const id_producto = req.params.id
    // ejecutamos la funcion importada desde modelo
    const productoEliminado = modelo.eliminarUno(id_producto) // le paso como parametro a la funcion

    // FALTA TERMINAR ESTO

    if(productoEliminado){
        res.json({mensaje:`Productos`})
    }
    else{
        res.status(404).json({mensaje:'Producto no encontrado'})
    }
}   