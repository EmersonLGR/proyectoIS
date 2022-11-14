const express = require('express');
const api = express.Router()
const comentarioController = require('../controllers/comentarioController');

api.post('/comentario', comentarioController.createComentario);
api.get('/comentario', comentarioController.getComentarios);
api.get('/comentario/search/:id', comentarioController.getSpecificComentario);
api.put('/comentario/update/:id', comentarioController.updateComentario);
api.get('/comentario/delete/:id', comentarioController.deleteComentario);

module.exports =  api;