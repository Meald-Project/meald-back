const Livreur= require('../models/livreur');
const DepotLivreur = require('../models/DepotLivreur')

// Créer un dépôt livreur
const createDepotLivreur = async (req, res) => {
    try {
        const result = await DepotLivreur.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir tous les dépôts livreurs
const getAllDepotLivreurs = async (req, res) => {
    try {
        const result = await DepotLivreur.findAll({ include: [Livreur] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir un dépôt livreur par ID
const getDepotLivreurById = async (req, res) => {
    try {
        const result = await DepotLivreur.findByPk(req.params.id, { include: [Livreur] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Mettre à jour un dépôt livreur par ID
const updateDepotLivreur = async (req, res) => {
    try {
        const result = await DepotLivreur.update(req.body, { where: { depot_livreur_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Supprimer un dépôt livreur par ID
const deleteDepotLivreur = async (req, res) => {
    try {
        const result = await DepotLivreur.destroy({ where: { depot_livreur_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createDepotLivreur, getAllDepotLivreurs, getDepotLivreurById, updateDepotLivreur, deleteDepotLivreur };