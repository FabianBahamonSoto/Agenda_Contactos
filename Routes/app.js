const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Rutas de la API
const routes = require('./user-routes');

//Middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Consumo de las rutas 
app.use('/api', routes);

module.exports = app; 