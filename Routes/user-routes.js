const express = require('express');
const api = express.Router();

const usersRoutes = require('../Models/users.controller');

api.post('/new_contact', usersRoutes.newContact);
api.get('/all_contact', usersRoutes.getAllContact);
api.get('/one_contact/:id', usersRoutes.getOneContact);
api.get('/buscar/:name', usersRoutes.buscador);
api.put('/update_contact/:id', usersRoutes.updateContact);
api.delete('/delete_contact/:id', usersRoutes.deleteContact);

module.exports = api;