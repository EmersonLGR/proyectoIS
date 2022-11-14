const express = require('express');
const api = express.Router()
const asambleaController = require('../controllers/asambleaController');

api.post('/asamblea', asambleaController.createAsamblea);
api.get('/asamblea', asambleaController.getAsambleas);
api.get('/asamblea/search/:id', asambleaController.getSpecificAsamblea);
api.put('/asamblea/update/:id', asambleaController.updateAsamblea);
api.get('/asamblea/delete/:id', asambleaController.deleteAsamblea);

module.exports =  api;