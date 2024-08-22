const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Category = sequelize.define(
  "Category",
  {
    categories_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "categories",
    timestamps: false,
  }
);

module.exports = Category;
