const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Article = sequelize.define(
  "Article",
  {
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    prix: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(225),
      allowNull: true,
    },
    disponibile: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    categories_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "articles",
    timestamps: false,
  }
);

module.exports = Article;
