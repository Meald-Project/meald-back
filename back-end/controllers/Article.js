const Article =require('../models/Articles')
const Category =require("../models/Categories")

// Créer un article
const createArticle = async (req, res) => {
    try {
        const result = await Article.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir tous les articles
const getAllArticles = async (req, res) => {
    try {
        const result = await Article.findAll({ include: [Category] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir un article par ID
const getArticleById = async (req, res) => {
    try {
        const result = await Article.findByPk(req.params.id, { include: [Category] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Mettre à jour un article par ID
const updateArticle = async (req, res) => {
    try {
        const result = await Article.update(req.body, { where: { article_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Supprimer un article par ID
const deleteArticle = async (req, res) => {
    try {
        const result = await Article.destroy({ where: { article_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle };