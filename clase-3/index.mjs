// Modulo HTTP
import console from 'node:console'
import http, { get } from 'node:http'
import { encode } from 'node:punycode'

import fsp from 'node:fs/promises'
import path from 'node:path'

// Creamosuna instancia de servidor
const app = http.createServer(async(peticion, respuesta) => {
    
   // console.log(peticion) // < viene del cliente
    
    if(peticion.method === 'GET'){

        if(peticion.url === '/'){
            // el servidor no puede dar 2 respuestas SEGUIDAS.
            // antes del end todo. despues nada.
            respuesta.statusCode = 200
            return respuesta.end(`
            ruta raiz /
            
        `) // <---
        }
                    
        if(peticion.url === '/usuarios'){
            respuesta.statusCode = 200
            return respuesta.end(`
            Ruta Usuarios /usuarios
            
        `) // <---
        }

        //-------------------------------------------------------------------
        //FALLBACK
        // si no exite la carpeta
        respuesta.statusCode = 404
        return respuesta.end('No se encontro nadaaaaa')

    }
    if(peticion.method === 'POST'){

        if(peticion.url === '/'){
            respuesta.statusCode = 200
            const ruta =  path.join('./contendio.txt')
            await fsp.writeFile(ruta,'contendioFake')

            return respuesta.end(`recurso creado`) 
        }
    }
})

// abrimos puerto - se trabaja con puertos del 3000 para arriba
app.listen(3000, () =>{
    console.log(`Servidor escuchando en http://localhost:3000`)
})