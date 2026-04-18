//-------------------------------------------
import http from 'node:http'
import { obtenerDatosAPI } from './fetchUsuarios.mjs'
import { escribirDatos } from './archivo.mjs'
import { lecturaDatos } from './archivo.mjs'


// Crear Servidor
const app = http.createServer(async(peticion, respuesta) => {
    
    if(peticion.method === 'GET'){

        if(peticion.url === '/usuarios'){
            respuesta.statusCode = 200
            try {
                //lectura de api y envio de datos al Cliente
                const usuarios = await lecturaDatos()
                return respuesta.end(JSON.stringify(usuarios,null,8))

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

