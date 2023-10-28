const express = require('express');
const mongoose = require('mongoose');
const {Auth, isAuthenticated}  = require('./auth.js');
const expedient = require('./controlador.js');

const app = express();
app.use(express.json());
const port = 3000;

async function conectarDB() {
  try {
    await mongoose.connect(`mongodb://tefa:123456789@mongDB:27017/EXAMEN_FINALDW?authSource=admin`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado a MongoDB con Mongoose');
  } catch (error) {
    console.error('Error al conectar a MongoDB con Mongoose:', error);
  }
}
conectarDB();


app.post('/nuevopacient', expedient.NuevoPaciente );
app.get('/ob_pacientes', expedient.OBPacient);
app.get('/Obte_paciente/:id', expedient.ObtenerPacienteId);
app.put('/actuali_paciente/:id', expedient.ActualizarPaciente);
app.delete('/borrar_paciente/:id',expedient.BorrarPaciente);

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get('*', (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});