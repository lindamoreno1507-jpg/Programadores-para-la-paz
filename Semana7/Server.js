const express = require('express');
const app = express();

// Habilitar lectura de datos en formato JSON
app.use(express.json());

// Arreglo para guardar los reportes
let reportes = [];

// Ruta para ver todos los reportes
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta para agregar un nuevo reporte
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };
  reportes.push(reporte);
  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
