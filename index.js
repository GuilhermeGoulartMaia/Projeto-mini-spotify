const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar JSON
app.use(express.json());

// Conectar ao MongoDB (Azure Cosmos DB)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Importar rotas
const userRoutes = require('./routes/userRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const musicRoutes = require('./routes/musicRoutes');

// Usar rotas
app.use('/api/users', userRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/musics', musicRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo ao Mini Spotify!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});