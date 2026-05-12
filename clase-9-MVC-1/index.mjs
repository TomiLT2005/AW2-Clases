import express from 'express'
import * as controlador from './modulos/productos/controlador.productos.mjs'

// puerto global
const puerto = 3000

// instancia o crear Servidor
const app = express()

/* Obtener todos los productos */
app.get('/api/v1/productos', controlador.obtenerTodos)
/* Obtener un solo producto por su ID */
app.get('/api/v1/productos/:id', controlador.obtenerUno)

/* Eliminar producto por su ID */
app.delete('/api/v1/productos/:id', controlador.eliminarUno)





//Abrir puerto
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en Servidor escuchando en http://localhost:${puerto}`)
})