const express = require('express');
const api = express.Router()
const personaController = require('../controllers/personaController');
const check = require('../middlewares/checkCorreo');

api.post('/persona', personaController.createPersona);
api.get('/personas', personaController.getPersonas);
api.get('/persona/search/:id', personaController.getPersona);
api.put('/persona/update/:id', personaController.updatePersona);
api.get('/persona/delete/:id', personaController.deletePersona);
api.post('/login', check);

module.exports =  api;