import express from 'express'
import { join } from 'node:path'
import { json } from 'node:stream/consumers'

// puerto global
const puerto = 3000

//instancia Servidor
const app = express()

// Avisamos express -> chequear datos del clientes -> cuerpo (configuracion)
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// arreglo Global 
const productos =[
        {   
            id: 1,          
            producto: 'Pantalon Adidas',
            categoria: 'Pantalones',
            precio: 1000
        },
        {   
            id: 2,          
            producto: 'Remera deportiva Adidas',
            categoria: 'Remeras',
            precio: 1500
        }
    ]

// verbo y ruta configurada GET / 
app.get('/',(req, res)=>{

    res.send('Hola express, estas en la raiz (/)')
})

app.get('/usuarios',(req,res)=>{

    const miObjeto ={               // objeto JS - se puede maniupular
        materia: 'AW2',

    }

    res.status(200)
    res.json(miObjeto)

    //res.set('content-type, application/json')
    //res.send('{"materia":"AW2",}') // Cadena en formato JSON
})

app.get('/productos',(req,res)=>{

    res.json(productos)

})


app.get('/productos/:id_producto',(req,res)=>{

    const id = parseInt(req.params.id_producto)

    console.log(id)


    //filtrar
    const filtrados = productos.filter((producto) => producto.id === id)

    //Mensajes
    if(filtrados.length > 0){

       return res.json(filtrados)
    }
    res.json({"mensaje":"Producto no encontrado"})

})

// Envio datos al servidor
app.post('/productos',(req,res)=>{

    // verificamos el cuerpo del mensaje
    const datosCliente = req.body
    //console.log(datosCliente)
    productos.push(datosCliente)
    res.status(201).json({mensaje:"Producto dado de alta"})
})


//Abrir puerto
app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en Servidor escuchando en http://localhost:${puerto}`)
})