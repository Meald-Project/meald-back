const sequelize = require("../config/config");
const Article = require("./Articles");
const Client = require("./Client");
const Livreur = require("./livreur");
const Commande = require("./Commande");
const Payment = require("./Paiement");
const Restaurant = require("./Restaurant");
const Rating = require("./Rating");
const ArticleCommande = require("./ArticleCommande");
const DepotLivreur = require("./DepotLivreur");
const User = require("./User");
const Category = require("./Categories");
const Likes = require("./Likes"); // Import the Likes model

// User - Livreur association
User.hasOne(Livreur, { foreignKey: "user_user_id" });
Livreur.belongsTo(User, { foreignKey: "user_user_id" });

// User - Client association
User.hasOne(Client, { foreignKey: "user_user_id" });
Client.belongsTo(User, { foreignKey: "user_user_id" });

// Restaurant - Category association
Restaurant.hasMany(Category, { foreignKey: "restaurant_id" });
Category.belongsTo(Restaurant, { foreignKey: "restaurant_id" });

// Category - Article association
Category.hasMany(Article, { foreignKey: "categories_id" });
Article.belongsTo(Category, { foreignKey: "categories_id" });

// Client - Commande association
Client.hasMany(Commande, { foreignKey: "user_id" });
Commande.belongsTo(Client, { foreignKey: "user_id" });

// Restaurant - Commande association
Restaurant.hasMany(Commande, { foreignKey: "restaurant_id" });
Commande.belongsTo(Restaurant, { foreignKey: "restaurant_id" });

// Livreur - Commande association
Livreur.hasMany(Commande, { foreignKey: "livreur_id" });
Commande.belongsTo(Livreur, { foreignKey: "livreur_id" });

// Commande - Payment association
Commande.hasMany(Payment, { foreignKey: "commande_id" });
Payment.belongsTo(Commande, { foreignKey: "commande_id" });

// Client - Rating association
Client.hasMany(Rating, { foreignKey: "user_id" });
Rating.belongsTo(Client, { foreignKey: "user_id" });

// Restaurant - Rating association
Restaurant.hasMany(Rating, { foreignKey: "restaurant_id" });
Rating.belongsTo(Restaurant, { foreignKey: "restaurant_id" });

// Livreur - DepotLivreur association
Livreur.hasMany(DepotLivreur, { foreignKey: "liveurs_livreur_id" });
DepotLivreur.belongsTo(Livreur, { foreignKey: "liveurs_livreur_id" });

// Article - ArticleCommande association
Article.hasMany(ArticleCommande, { foreignKey: "article_id" });
ArticleCommande.belongsTo(Article, { foreignKey: "article_id" });

// Commande - ArticleCommande association
Commande.hasMany(ArticleCommande, { foreignKey: "commande_id" });
ArticleCommande.belongsTo(Commande, { foreignKey: "commande_id" });

// Client - Article (Likes) association
Client.belongsToMany(Article, { through: Likes, foreignKey: 'clientId' });
Article.belongsToMany(Client, { through: Likes, foreignKey: 'articleId' });

// Synchronize the associations
// sequelize
//   .sync()
//   .then(() => {
//     console.log("Les associations ont été synchronisées");
//   })
//   .catch((err) => {
//     console.error("Erreur lors de la synchronisation des associations :", err);
//   });

module.exports = sequelize;
