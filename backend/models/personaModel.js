const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        match: /([a-zA-Z])/
    },
    role: {
        type: String,
        enum:[
            'directiva',
            'user'
        ],
        default: 'user'
    },
    correo: {
        type: String,
        required: true,
        match: /[A-Za-z0-9-.]+[A-Za-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+/
    }
});

module.exports = mongoose.model('persona', PersonaSchema);