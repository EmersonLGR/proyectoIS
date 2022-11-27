const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
    usuario: {
        type: Schema.ObjectId,
        ref: 'persona',
        match: /[A-Za-z0-9]+/
    },
    asamblea: {
        type: Schema.ObjectId,
        ref: 'asamblea',
        match: /[A-Za-z0-9]+/
    },
    comentario: {
        type: String,
        required: true,
        match: /[A-Za-z0-9]+\.,/
    }
});

module.exports = mongoose.model('comentario', ComentarioSchema);