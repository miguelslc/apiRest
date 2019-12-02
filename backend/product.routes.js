module.exports = (app) => {
    const products = require('./product.controller');

    //Crear un producto Nuevo
    app.post('/products', products.create);

    //Obtener Productos
    app.get('/products', products.findAll);

    //Obtener Productos por ID
    app.get('/products/:productId', products.findOne);

    //Actualizar Productos por ID
    app.get('/products/:productId', products.update);

    //Eliminar Producto por ID
    app.get('/products/:productId', products.delete);
}