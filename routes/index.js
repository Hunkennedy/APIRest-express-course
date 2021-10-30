
const productsRouter = require('./products.route');
const categoriesRouter = require('./categories.route');
const usersRouter = require('./users.route');

function routerApi(app) {
    const router = require('express').Router();
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
    app.use('/api/v1', router)

}

module.exports = routerApi; // --> ~/index