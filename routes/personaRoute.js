const express = require('express');
const api = express.Router()
const personaController = require('../controllers/personaController');

api.post('/persona', personaController.createPersona);
api.get('/persona', personaController.getPersonas);
api.get('/persona/search/:id', personaController.getSpecificPersona);
api.put('/persona/update/:id', personaController.updatePersona);
api.get('/persona/delete/:id', personaController.deletePersona);

module.exports =  api;