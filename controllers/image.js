//base de "datos" de la info de las fotos, es un array de objetos
// titulo, url, fecha y mas adelante el color predominante

// paquete terceros color predominante 
const { getColorFromURL } = require('color-thief-node');

// importar el modelo
const modelImages = require('../models/image');
const modelTag = require('../models/tag');



const getAllImages = (req, res) => {

    // recuperar todas las imagenes del modulo
    const pictures = modelImages.getOrderedPictures();

    // le pasamos a la vista index.ejs una variable que se llama numpics cuyo valor es el pictures 
    res.render("index", {
        numPics: pictures.length,
        pictures

    }); //busca la vista index.js dentro de la carpeta views y renderiza el contenido como HTML y enviaselo al cliente

};

const getForm = (req, res) => {

    // obtenemos todos los tags
    const tags = modelTag.getAllTags();

    res.render("form", {
        urlRepetida: undefined,
        tags
    });
};

const postForm = async (req, res) => {
    //añadir una constante que se quede con las propiedades del formulario , const{title,url,date} = req.body ,propiedad body hace ref a la inf, payload que viaja en el cuerpo de las peticiones post
    const { title, url, date, tag } = req.body;

    const dominantColor = await getColorFromURL(url);


    // 1.Pedir al modelo si tiene una foto con esta url en la BBDD 
    const urlExist = modelImages.urlExists(url);

    //2. si es false podemos hacer un push a la variable pictures y res.redirect("/"),
    //3. si es true tenemos que informar al usuario que no vale 

    if (urlExist) {

        // obtenemos todos los tags del modelo
        const tags = modelTag.getAllTags();

        //devolver mensaje al usuario
        res.render("form", {
            urlRepetida: url,
            tags
        });

    }
    else {
        modelImages.addNewPicture(title, url, date, dominantColor, tag);

    }



    res.redirect("/images")

};

module.exports = {
    getAllImages,
    getForm,
    postForm
}