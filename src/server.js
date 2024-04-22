const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Point de terminaison GET pour la racine ('/')
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur Node.js et Express!');
});

// Point de terminaison GET pour récupérer des données (exemple)
app.get('/data', (req, res) => {
  const data = {
    message: 'Ceci est un exemple de données du serveur.',
    date: new Date(),
  };
  res.json(data);
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
