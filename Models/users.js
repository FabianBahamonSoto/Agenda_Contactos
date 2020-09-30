const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        nombre: String,
        telefono: String, 
        fechaNacimiento: Date,
        edad: String,
        direccion: String,
        correo: String, 
    }
);

module.exports = model('Users', userSchema);