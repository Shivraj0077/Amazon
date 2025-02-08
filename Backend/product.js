require('dotenv').config();
const { DataTypes } = require('sequelize');
const sequelize = require('./db')

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.01,
    },
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    timestamps: true,
    tableName: 'products',
});

module.exports = Product;
