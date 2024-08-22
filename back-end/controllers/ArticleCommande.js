const Article =require('../models/Articles')
const Commande =require('../models/Commande')
const ArticleCommande=require('../models/ArticleCommande')


// Créer un article de commande
const createArticleCommande = async (req, res) => {
    try {
        const result = await ArticleCommande.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir tous les articles de commande
const getAllArticleCommandes = async (req, res) => {
    try {
        const result = await ArticleCommande.findAll({ include: [Article, Commande] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir un article de commande par ID
const getArticleCommandeById = async (req, res) => {
    try {
        const result = await ArticleCommande.findByPk(req.params.id, { include: [Article, Commande] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Mettre à jour un article de commande par ID
const updateArticleCommande = async (req, res) => {
    try {
        const result = await ArticleCommande.update(req.body, { where: { article_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Supprimer un article de commande par ID
const deleteArticleCommande = async (req, res) => {
    try {
        const result = await ArticleCommande.destroy({ where: { article_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createArticleCommande, getAllArticleCommandes, getArticleCommandeById, updateArticleCommande, deleteArticleCommande };