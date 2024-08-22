const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Likes = sequelize.define('Likes', {
  clientId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'clients', // This should match the table name in your database
      key: 'id'
    }
  },
  articleId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'articles', // This should match the table name in your database
      key: 'id'
    }
  }
});

module.exports = Likes;
