import fsp from 'node:fs/promises';
import path from 'node:path'
import { json } from 'node:stream/consumers';


try {
    // Leemos la API via Fetch - objeto URL
    // Luego de leer me devuelve un objeto response
    const respuesta = await fetch('https://69cbcc300b417a19e07b450e.mockapi.io/Api1/Producto')

    // Extraer el cuerpo en formato JSON Y convertir en Arreglo/Objeto
    const productos = await respuesta.json() // <--arreglo JS

    const ruta = path.join('datosAPI.json')

    // Convertimos un objeto JS - arreglo u objeto a JSON
    const datosGuardar = JSON.stringify(productos,null,5)
    // Escribir archivo
    await fsp.writeFile(ruta,datosGuardar)

} catch (e) {
    console.log(e)
}