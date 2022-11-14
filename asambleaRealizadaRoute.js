const express = require('express');
const api = express.Router()
const asambleaRealizadaController = require('../controllers/asambleaRealizadaController');

api.post('/asambleaRealizada', asambleaRealizadaController.createAsambleaRealizada);
api.get('/asambleaRealizada', asambleaRealizadaController.getAsambleasRealizadas);
api.get('/asambleaRealizada/search/:id', asambleaRealizadaController.getSpecificAsambleaRealizada);
api.put('/asambleaRealizada/update/:id', asambleaRealizadaController.updateAsambleaRealizada);
api.get('/asambleaRealizada/delete/:id', asambleaRealizadaController.deleteAsambleaRealizada);

module.exports = api;