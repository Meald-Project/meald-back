const Restaurant =require('../models/Restaurant')
const Category =require("../models/Categories")
const Article =require('../models/Articles')
// Créer une catégorie
const createCategory = async (req, res) => {
    try {
        const result = await Category.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir toutes les catégories
const getAllCategories = async (req, res) => {
    try {
        const result = await Category.findAll({ include: [Restaurant, Article] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir une catégorie par ID
const getCategoryById = async (req, res) => {
    try {
        const result = await Category.findByPk(req.params.id, { include: [Restaurant, Article] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Mettre à jour une catégorie par ID
const updateCategory = async (req, res) => {
    try {
        const result = await Category.update(req.body, { where: { categories_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Supprimer une catégorie par ID
const deleteCategory = async (req, res) => {
    try {
        const result = await Category.destroy({ where: { categories_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory}