const { CosmosClient } = require('@azure/cosmos');

const client = new CosmosClient({
  endpoint: 'https://<SEU-COSMOS-DB-ENDPOINT>.documents.azure.com:443/',
  key: '<SUA-COSMOS-DB-KEY>',
});

async function testConnection() {
  try {
    const { database } = await client.databases.createIfNotExists({ id: 'TestDatabase' });
    console.log('Successfully connected and created database:', database.id);
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testConnection();
