require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const { MongoClient } = require('mongodb'); // Importa a biblioteca MongoDB

// Lê o URI completo do arquivo .env
const mongoUri = process.env.COSMOS_DB_URI;

async function testConnection() {
  const client = new MongoClient(mongoUri); // Inicializa o cliente com o URI completo
  try {
    console.log('Tentando conectar ao Cosmos DB com API MongoDB...');
    
    await client.connect(); // Testa a conexão
    console.log('Conexão bem-sucedida!');
  } catch (error) {
    console.error('Falha na conexão:', error.message);
  } finally {
    await client.close(); // Fecha a conexão
  }
}

testConnection();
