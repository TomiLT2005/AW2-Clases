//-------------------------------------------
import http from 'node:http'
import { obtenerDatosAPI } from './fetchUsuarios.mjs'
import { escribirDatos } from './archivo.mjs'
import { lecturaDatos } from './archivo.mjs'


// FILTRO

const datos = await obtenerDatosAPI()
const datosFiltrados = datos.filter((usuario) => usuario.id < 10)
const usuariosFiltrados = JSON.stringify(datosFiltrados, null, 8)











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
        if(peticion.url === '/usuarios/filtrado'){
            respuesta.statusCode = 200
            try {
                // aca va lo de filtrado

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

