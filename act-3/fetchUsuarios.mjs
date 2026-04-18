async function obtenerDatosAPI () {
    
    try {
        // Leemos la API via Fetch - objeto URL
        // Luego de leer me devuelve un objeto response
        const respuesta = await fetch('https://api.escuelajs.co/api/v1/users')

        // Extraer el cuerpo en formato JSON Y convertir en Arreglo/Objeto
        const usuarios = await respuesta.json() // <--arreglo JS

        return usuarios

    } catch (e) {
        console.log(e)
    }
}

export {obtenerDatosAPI}

