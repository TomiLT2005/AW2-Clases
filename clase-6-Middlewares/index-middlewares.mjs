import express from 'express'
import { join } from 'node:path'
import { send } from 'node:process'
import { json } from 'node:stream/consumers'

// puerto global
const puerto = 3000

//instancia o crear Servidor
const app = express()

//Declarar funciones middlewares
function middleware1(req, res ,next){

    const usuarioExiste = false 

    if(usuarioExiste){
        console.log('se ejecutò el middleware1, puede Pasar')
        next() // si nos olvidamos de esto, queda en pending
    }
    else{
        console.log('se ejecutò el middleware1, NO puede Pasar')
        res.send('Usuario no registrado')
    }
     
}

app.get('/', middleware1, (req,res)=>{
    console.log('Respuesta final')
    res.send('Estas en raiz')
})


//Abrir puerto
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en Servidor escuchando en http://localhost:${puerto}`)
})