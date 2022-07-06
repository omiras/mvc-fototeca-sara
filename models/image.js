// Base de datos. Eventualmente, esto va a ser guardado en un fichero. Y más adelante, en una base de datos.
const fs = require('fs');
const path = require('path');

// ruta absoluta hasta el fichero db.json
const rutaFichero = path.join(__dirname, "images.json");


// El modelo debe ofrecer métodos al controlador y herramientas para poder gestionar la inseción, modificación , borrado y recuperación de la entidad (en este caso imágenes)
const DB = require('./images.json');

// Recuperar todas las fotos
const getPictures = () => {
    return DB;
};

// Recuperar las fotos ordenadas 
const getOrderedPictures = () => {

    const pictures = getPictures();

    pictures.sort(function (a, b) {

        return new Date(b.date) - new Date(a.date);
    });

    return pictures;
}

// añadir foto nueva
const addNewPicture = (title, url, date, color, tag) => {

    // Recuperar todas las fotos
    const pictures = getPictures();

    // Añadir las fotos al array
    pictures.push({
        title,
        url,
        date,
        color,
        tag
    });

    // Escribir el array entero de nuevo en el JSON
    fs.writeFileSync(rutaFichero, JSON.stringify(pictures));
};

// función para chequear si una URL existe en el array de fotos
const urlExists = (url) => {
    const pictures = getPictures();
    return pictures.some(p => p.url == url);
};

module.exports = {
    getPictures,
    getOrderedPictures,
    addNewPicture,
    urlExists
}



