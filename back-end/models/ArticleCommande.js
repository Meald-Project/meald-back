const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const ArticleCommande = sequelize.define(
  "ArticleCommande",
  {
    article_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantite: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    prix: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    commande_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "article_commande",
    timestamps: false,
  }
);

module.exports = ArticleCommande;
