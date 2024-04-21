const { Router } = require('express');
const User = require('./models/User');
const UserController = require('./controllers/UserController')
const academiaController = require('./controllers/AcademiaController')
const searchController = require('./controllers/searchController')

const routes = Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/academias', academiaController.store);

routes.get('/search', searchController.index);

module.exports = routes;


