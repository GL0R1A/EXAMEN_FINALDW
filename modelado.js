const mongoose = require('mongoose');

// Define el esquema del paciente
const pacienteSchema = new mongoose.Schema({
  nombre_completo: { type: String, required: true },
  apellido_completo: { type: String, required: true },
  fechadeNacimiento: { type: Date, required: true },
  genero: { type: String, enum: ['Masculino', 'Femenino', 'Otro'] },
  direccion: {type: String},
  Telefono: {type: String}
});

// Crea el modelo de Paciente
const Paciente = mongoose.model('Paciente', pacienteSchema);

module.exports = Paciente;