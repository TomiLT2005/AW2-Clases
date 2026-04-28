import express from 'express'
import { join } from 'node:path'
import { send } from 'node:process'
import { json } from 'node:stream/consumers'

// puerto global
const puerto = 3000

//instancia o crear Servidor
const app = express()

//Declarar funciones middleware
function middleware(req, res ,next){
    console.log('se ejecutò el MiddleWre')
    next() // si nos olvidamos de esto, queda en pending  
}

app.use('/usuarios', middleware)

app.get('/', (req,res)=>{
    console.log('Respuesta final')
    res.send('Hola')
})

app.get('/usarios', (req,res)=>{
    console.log('Respuesta final en usuarios')
    res.send('Hola Panter')
})


//Abrir puerto
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en Servidor escuchando en http://localhost:${puerto}`)
})