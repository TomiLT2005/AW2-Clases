import fsp from 'node:fs/promises';
import path from 'node:path'
import { json } from 'node:stream/consumers';



// Extraer Datos y Filtrado
try {
    // Leemos la API via Fetch - objeto URL
    // Luego de leer me devuelve un objeto response
    const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')

    // Extraer el cuerpo en formato JSON Y convertir en Arreglo/Objeto
    const usuarios = await respuesta.json() // <--arreglo JS

    // Cuando optenemos el arreglo JS, filtramos con MAP()
    const datosFiltrados = usuarios.map(usuario =>({
        id: usuario.id,
        nombre: usuario.name,
        email: usuario.email 
    }))
    
    const ruta = path.join('usuarios.json')

    // Convertimos un objeto JS - arreglo u objeto a JSON
    const datosGuardar = JSON.stringify(datosFiltrados,null,3)

    // Escribir archivo
    await fsp.writeFile(ruta,datosGuardar)

} catch (e) {
    console.log(e)
}
