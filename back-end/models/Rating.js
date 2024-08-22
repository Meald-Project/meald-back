const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Rating = sequelize.define(
  "Rating",
  {
    rating_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    commentaire: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "ratings",
    timestamps: false,
  }
);

module.exports = Rating;
