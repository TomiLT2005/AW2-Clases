import fsp from 'node:fs/promises'
import path from 'node:path'


async function escribirDatos() {
    try {
        const ruta = path.join('usuarios.json')

        const datosGuardar = JSON.stringify(usuarios,null,8)
        await fsp.writeFile(ruta,datosGuardar)   

    } catch (error) {
        console.log(e)
    }
}

async function lecturaDatos() {
    try {
        const ruta = path.join('usuarios.json')
        const contenido = await fsp.readFile(ruta,'utf8')

        return JSON.parse(contenido)

    } catch (error) {
        console.log(e)
    }
}

export {escribirDatos}
export {lecturaDatos}