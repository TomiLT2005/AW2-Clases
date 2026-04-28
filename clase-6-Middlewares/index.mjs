import express from 'express'
import path, { join } from 'node:path'

// puerto global
const puerto = 3000

//instancia o crear Servidor
const app = express()


app.use(express.static(path.resolve('front')))


//Abrir puerto
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en Servidor escuchando en http://localhost:${puerto}`)
})