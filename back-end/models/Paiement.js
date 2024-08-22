const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Payment = sequelize.define(
  "Payment",
  {
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    commande_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    methode_paiement: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    montant: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    date_paiement: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    tableName: "paiments",
    timestamps: false,
  }
);

module.exports = Payment;
