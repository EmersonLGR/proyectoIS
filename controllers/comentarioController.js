const Comentario = require('../models/comentarioModel');

const createComentario = (req, res) =>{
    const {usuario, asamblea, comentariotxt} = req.body;
    const newComentario = new Comentario({
        usuario,
        asamblea,
        comentariotxt
    });
    newComentario.save((err, comentario) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(comentario)
    })
}

const getComentarios = (req, res) => {
    Comentario.find({}, (err, comentario) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(comentario)
    })
}

const getSpecificComentario = (req, res) => {
    const {id} = req.params;

    Comentario.findById(id).populate({ path: 'usuario'}).exec((err, comentario) => {
        if(err){
            return res.status(400).send({ message: "Error al obtener la Comentario"})
        }
        if (!comentario){
            return res.status(404).send({message: "Comentario no encontrada"})
        }
        return res.status(200).send(comentario)
    })
}

const updateComentario = (req, res) => {
    const {id} = req.params;

    Comentario.findByIdAndUpdate(id, req.body, (err, comentario) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(comentario)
    })
}

const deleteComentario = (req, res) => {
    const {id} = req.params;

    Comentario.findByIdAndDelete(id, (err, comentario) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(comentario)
    })
}

module.exports = {
    createComentario,
    getComentarios,
    getSpecificComentario,
    updateComentario,
    deleteComentario
}
