//importar express y definir las dos rutas

const express = require('express');

const imageRoutes = require('./routes/image');
const tagRoutes = require('./routes/tag');

const app = express();
app.use(express.static('public'));

// Informamos que nuestro servidor va a utilizar el sistema de plantillas EJS
app.set('view engine', 'ejs');

//poder gestionar peticiones del tipo POST
app.use(express.urlencoded({ extended: false }));

//endpoints
// Todas las rutas a partir de ahora que esten dentro de imageRoutes, estarán prefijadas por la URL /images
// /images
// /images/nueva-imagen
app.use('/images', imageRoutes);
app.use('/tag', tagRoutes);

// Requisito 4 -A
// 1. Implementar los métodos para obtener todos los tags y añadir un nuevo tag a tags.json en models/tag.js
// 2. Implementar las rutas del POST del formulario y el controlador (basarse en image.js, es muy parecido)
// 3. Cuando insertemos una nueva etiqueta, podemos renderizar de nuevo al usuario a la vista del formulario de añadir etiqueta (y quizás un mensaje diciendo que la etiqueta se ha insertado correctamente en la BBDD?) 
// 4. Si lo habéis hecho bien, el fichero tags.json debería empezar a llenarse de objetos

// Requisito 4 - B

// 1. El controlador image.js, cuando renderiza el formulario, debe ahora también pasar a la vista todos los tags disponibles
// 2. En la vista form.ejs; tenemos que hacer un forEach para crear tantas <option> como tags nos pasen a la vista. Recordad todos los valores que debe cotener el tag option para que funcione correctamente. También recordar el campo name para el <select>
// 3. Hay que recuperar en el controlador postForm el tag elegido por el usuario. 
// 4. Modificar model/image.js, para que la función addNewImage acepte un nuevo parámetro (tag). El objeto ahora debe contener también este tag
// 5. El controlador ahora si podría crear una nueva imagen asociandole el tag del usuario

// REquisito 4 - C

// 1. Modificar el controlador controllers/image.js para que inserte todo el objeto tag en la "base de datos". Debemos recuperar el tag identificado con el "name" que ha seleccionado el usuario y usarlo para crear la imagen
// 2. En la vista views/index.ejs; añadir un nuevo elemento de itnerfaz de usuario para mostrar la etiqueta con su color


app.get('/', (req, res) => {
    res.redirect('/images');
})

app.get("/about", (req, res) => {
    res.render("about");

});




//parametro adicional de callback, esta funcion se ejecuta si todo ha ido bien
app.listen(3001, () => {
    console.log("Server funciona");
});



// enlazar el html del formulario ejs con boostrap