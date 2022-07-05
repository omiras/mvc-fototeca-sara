const fs = require('fs');
const path = require('path');

const rutaFichero = path.join(__dirname, 'tags.json');

const DB = require('./tags.json');

// Necesitamos un método para recuperar todos los tags de tags.json
const getAllTags = () => {
    return DB;
}
// Necesitamos un método para añadir un nuevo tag a tags.json
const addNewTag = (name, color) => {
    const tags = getAllTags();

    tags.push({
        name,
        color
    });

    fs.writeFileSync(rutaFichero, JSON.stringify(tags));
};

module.exports = {
    getAllTags,
    addNewTag
}


