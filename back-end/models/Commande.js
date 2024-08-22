const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Commande = sequelize.define(
  "Commande",
  {
    commande_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    prix_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    delivery_status: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    date_commande: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    mode_payement: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    frais_livraison: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    livreur_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "commandes",
    timestamps: false,
  }
);

module.exports = Commande;
