const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Restaurant = sequelize.define(
  "Restaurant",
  {
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mot_de_passe: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    tableName: "restaurants",
    timestamps: false,
  }
);

module.exports = Restaurant;
