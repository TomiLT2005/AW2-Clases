import express from 'express'

// Puerto Global
const puerto = 3000

//  Creamos servidor
const app = express()

//Declarar Funciones Middlewares
async function middlewareVerificar(req, res ,next){

    const respuesta = await fetch('http://localhost:4321/usuario')
    const usuario = await respuesta.json()

    const cod = req.params.codigo
    console.log(usuario)

    if(usuario.codigo === parseInt(cod)){

        return next() 
    }
    else{
        res.status(400)
        res.json({mensaje:'El código es incorrecto'})
    }

     
}


app.get('/:codigo', middlewareVerificar, (req, res)=>{
    
    res.status(200)
    res.json({mensaje:'Codigo correcto'})

})



//Abrir puerto
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en Servidor escuchando en http://localhost:${puerto}`)
})