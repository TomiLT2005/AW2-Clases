// Express - framework de JS para crear Servidores 

//importar - pero antes descargar en NPM
import express from 'express'

// ruta global para puerto
const puerto = 3000

// Instancia Servidor
const app = express()

// verbo y ruta configurada GET / 
app.get('/',(req, res)=>{
    res.status(200)
    res.send('Hola express en /')
})

// verbo y ruta configurada GET /usurios 
app.get('/usuarios',(req, res)=>{
    res.status(200)
    res.set('content-type','text/html')
    res.send('<h1> Hola express en /usuarios </h1>')
})

// verbo y ruta configurada POST / 
app.post('/',()=>{
    res.status(201)
    res.send('Hola POST en /')
})

// Abro puerto para escuchar peticiones
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en Servidor escuchando en http://localhost${puerto}`)
})