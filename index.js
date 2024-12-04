const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Conectar ao MongoDB
mongoose.connect(process.env.CHAVE_AZURE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, // Tempo de timeout de conexão
})
.then(() => console.log('Conectado ao MongoDB com sucesso!'))
.catch(err => {
  console.error('Erro de conexão com o MongoDB:', err.message);
});

const app = express();
const PORT = 3000;

// Middleware para análise de JSON
app.use(express.json());

// Importação das rotas
const userRoutes = require('./routes/userRoutes');
const playlistRoutes = require('./routes/playlistRoutes');
const musicRoutes = require('./routes/musicRoutes');

// Usando rotas
app.use('/users', userRoutes);
app.use('/playlists', playlistRoutes);
app.use('/musics', musicRoutes);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
