// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const ItemModel = require('./models/item'); // Ajuste para o seu modelo

const app = express();
const port = 3000; // Porta para seu servidor Express

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuração do Sequelize para o PostgreSQL
const sequelize = new Sequelize('db_42upvya3u', 'user_42upvya3u', 'p42upvya3u', {
  host: 'ocdb.app',
  port: 5052,
  dialect: 'postgres',
});

// Inicializa o modelo de Item
const Item = ItemModel(sequelize);

// Conecta ao banco de dados e sincroniza o modelo
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados com sucesso.');
    await Item.sync(); // Sincroniza o modelo com o banco de dados
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

// Inicia o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
