const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'docs')));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});