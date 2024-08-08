const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

const { faker } = require('@faker-js/faker');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
    router.use('/users', usersRouter);
}
module.exports = routerApi;
//http://localhost:3000/
//http://localhost:3000/api/v1/products
//http://localhost:3000/api/v1/products/1
//http://localhost:3000/api/v1/categories/5/products/3
//http://localhost:3000/api/v1/users?limit=1&offset=5