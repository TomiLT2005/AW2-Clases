import express from 'express'
// funcion: Obtener Producto
import { obtenerProductos, obtenerProductoPorID, eliminarProductoPorID } from './funciones.mjs'


// puerto global
const puerto = 3000


// instancia o crear Servidor
const app = express()

// Definiendo una API REST

// GET /api/v1/productos            -> todos
app.get('/api/v1/productos',obtenerProductos)

// GET /api/v1/productos/:id        -> por ID
app.get('/api/v1/productos/:id', obtenerProductoPorID)

// POST /api/v1/productos           -> dar de ALTA un nuevo producto
// PUT /api/v1/productos/:id        -> modificar un producto por ID
// DELETE /api/v1/productos/:id     -> eliminar un producto por ID
app.delete('/api/v1/productos/:id', eliminarProductoPorID)



//Abrir puerto
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en Servidor escuchando en http://localhost:${puerto}`)
})