const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const User = sequelize.define(
  "Users",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    motdepasse: {
      type: DataTypes.STRING(450),
      allowNull: true,
    },
    addresse: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
