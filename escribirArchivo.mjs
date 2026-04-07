import fsp from 'node:fs/promises';
import path from 'node:path'


try {
    // escribimos archivo
    const ruta = path.join('texto.txt')
    fsp.writeFile(ruta,'Nuevo Contenido por Youtube')

} catch (e) {
    console.log(e)
}