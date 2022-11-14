const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
    nombre: {
        type: String,
        required: true
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
        required: true
    }
});

module.exports = mongoose.model('persona', PersonaSchema);