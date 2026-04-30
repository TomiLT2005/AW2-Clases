import express from 'express'

// Puerto Global
const puerto = 4321

// creamos servidor
const app = express()

app.get('/usuario', (req, res)=>{
    const usuario = {
        codigo: 5183
    } 
    res.json(usuario)
})



//abrimos puerto
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en Servidor escuchando en http://localhost:${puerto}`)
})