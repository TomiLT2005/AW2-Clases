import http from 'node:http'
import { obtenerDatosAPI } from './fetchUsuarios.mjs'
import { escribirDatos } from './archivo.mjs'
import { lecturaDatos } from './archivo.mjs'



// SERVIDOR
const app = http.createServer(async(peticion, respuesta) => {
    
    if(peticion.method === 'GET'){

        if(peticion.url === '/usuarios'){
            respuesta.statusCode = 200
            try {
                //lectura de api y envio de datos al Cliente
                const usuarios = await lecturaDatos()
                return respuesta.end(usuarios)

            } catch (e) {
                console.log(e)
                respuesta.statusCode = 500
                return respuesta.end('Error en la lectura')
            }
        }
        if(peticion.url === '/usuarios/filtrados'){
            respuesta.statusCode = 200
            try {
                //Filtro
                const usuarios = await lecturaDatos()    // devuelve un string (texto plano) en formato JSON
                const usuariosObj = JSON.parse(usuarios) // convertir el JSON a objeto/array de JS para poder usar el FILTER

                const filtrados = usuariosObj.filter(usuario => usuario.id < 10)
                return respuesta.end(JSON.stringify(filtrados,null,8)) // convertir el obj/array a texto JSON para enviar al cliente

                
            } catch (e) {
                console.log(e)
                respuesta.statusCode = 500
                return respuesta.end('Error en la lectura')
            }
        }
    }
    //--FALLBACK-------------------------------------------------------------
    respuesta.statusCode = 404
    return respuesta.end('No se encontro recurso') 
})


// Abrimos Puerto
app.listen(3000, () =>{
    console.log(`Servidor escuchando en http://localhost:3000`)
})

