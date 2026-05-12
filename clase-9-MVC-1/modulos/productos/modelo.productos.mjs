/*
    Capa encargada de los datos
    por ejemplo: consultas a bases de datos local o externa

*/


import { productos } from '../../productos.mjs'

export function obtenerTodos(){
    /*
        si tomamos los datos de un archivo JSON
        aca iria el Readfile 
    */
    return productos
}


export function obtenerUno(id){

    // chequear si id es un numero
    const id_producto = Number(id) 

    const producto = productos.datos.filter((producto)=>{
        return Number(producto.id) === id_producto
    })

    // arreglos 
    return producto
}

export function eliminarUno(id) {

    const id_producto = Number(id)
    const cantidadItemsArreglo = productos.datos.length

    productos.datos.forEach((producto,indice)=>{
        if(Number(producto.id) === id_producto){

            producto.datos.splice(indice,1)
        }
    })

    if(cantidadItemsArreglo > productos.datos.length){
        return true
    }
    else{
        return false
    }
}