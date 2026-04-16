import fsp from 'node:fs/promises'
import path from 'node:path'
//-------------------------------------------
import http from 'node:http'


// Extraer de datos de API
try {
    // Leemos la API via Fetch - objeto URL
    // Luego de leer me devuelve un objeto response
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')

    // Extraer el cuerpo en formato JSON Y convertir en Arreglo/Objeto
    const usuarios = await respuesta.json() // <--arreglo JS

    // Construir la Ruta 
    const ruta = path.join('usuarios.json')

    // Convertimos un objeto JS - arreglo u objeto a JSON
    const datosGuardar = JSON.stringify(usuarios,null,8)

    // Escribir archivo
    await fsp.writeFile(ruta,datosGuardar)

} catch (e) {
    console.log(e)
}


// Craer instancia servidor
const app = http.createServer(async(peticion, respuesta) => {
    
    if(peticion.method === 'GET'){

        if(peticion.url === '/usuarios'){
            respuesta.statusCode = 200
            try {
                //lectura de api y envio de datos al Cliente
                const ruta = path.join('usuarios.json')
                const contenido = await fsp.readFile(ruta,'utf8')
            
                return respuesta.end(contenido)
            
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

