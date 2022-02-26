const express = require('express');

const clientController = require('./controllers/ClientController');

const connection = require('./database/connection');

const routes = express.Router();

// Cadastrar cliente
routes.post('/register', clientController.create);

// Listar cliente cadastrados
routes.get('/clients', clientController.list);

// Editar cliente
routes.put('/clients/:id', clientController.update);

// Deletar clientes
routes.delete('/clients/:id', clientController.delete);

module.exports = routes;