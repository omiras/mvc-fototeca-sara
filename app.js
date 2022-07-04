

//importar express y definir las dos rutas

const express = require('express');

const imageRoutes = require('./routes/image');





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