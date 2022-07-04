const express = require('express');
const imageController = require('../controllers/image');
const router = express.Router();

// Ponemos todas las rutas que tengan que ver con la gestión de imágenes

router.get("/", imageController.getAllImages);


router.get("/nueva-imagen", imageController.getForm);

//tengo que añadir una peticion post para el formulario, para acceder a esa informacion necesitamos la propiedad req.body // el post es el met encargado de actualizar la bbdd

//si paso una variable al post, tb debo al get !
router.post("/nueva-imagen", imageController.postForm);
module.exports = router;