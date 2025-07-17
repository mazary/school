const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde "public"
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});





