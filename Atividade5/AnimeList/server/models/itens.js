// models/item.js
import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; // Importe sua configuração do Sequelize

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano_de_criacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
  },
  imagem_ref: {
    type: DataTypes.BLOB('long'), // Usar BLOB para armazenar imagens
  },
});

// Sincroniza o modelo com o banco de dados
await Item.sync();

export default Item;
