const tagModel = require('../models/tag');

const getForm = (req, res) => {
    res.render('form-tag', {
        name: undefined
    });
};

const postForm = (req, res) => {
    const { name, color } = req.body;

    // insertarlo en la base de datos
    tagModel.addNewTag(name, color);

    // volver a renderizar la vista formulario con un mensaje indicando al usuario que hemos insertado el tag
    res.render('form-tag', {
        name
    })
}

module.exports = {
    getForm,
    postForm
}