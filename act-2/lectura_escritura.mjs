import fsp from 'node:fs/promises';
import path from 'node:path'


// Lectura y mostrar en consola
try {
    const ruta = path.join('usuarios.json')
    const contenido = await fsp.readFile(ruta,'utf8')

    console.log(contenido)

} catch (e) {
    console.log(e)
}

