const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Livreur = sequelize.define(
  "Livreur",
  {
    livreur_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    matricule: {
      type: DataTypes.STRING(55),
      allowNull: true,
    },
    compte_bancaire: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    user_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cin: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    tableName: "livreurs",
    timestamps: false,
  }
);

module.exports = Livreur;
