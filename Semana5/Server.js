const express = require('express');
const app = express();

// Permite leer datos en formato JSON (necesario para el POST)
app.use(express.json());

// Ruta 1: Página principal
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta 2: Saludo general
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta 3: Mensaje con nombre variable
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta NUEVA:(Pregunta 8)
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Puerto de escucha
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
