const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComentarioSchema = new Schema({
    usuario: {
        type: Schema.ObjectId,
        ref: 'persona'
    },
    asamblea: {
        type: Schema.ObjectId,
        ref: 'asamblea'
    },
    comentario: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('comentario', ComentarioSchema);