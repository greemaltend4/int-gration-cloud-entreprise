const express = require('express');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue dans l\'application d\'Intégration Cloud Entreprise');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d\'exécution sur le port ${PORT}`);
});
