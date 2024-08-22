const Livreur= require('../models/livreur');
const  User = require('../models/User');

// Créer un livreur
const createLivreur = async (req, res) => {
    try {
        const result = await Livreur.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir tous les livreurs
const getAllLivreurs = async (req, res) => {
    try {
        const result = await Livreur.findAll({ include: [User] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir un livreur par ID
const getLivreurById = async (req, res) => {
    try {
        const result = await Livreur.findByPk(req.params.id, { include: [User] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Mettre à jour un livreur par ID
const updateLivreur = async (req, res) => {
    try {
        const result = await Livreur.update(req.body, { where: { livreur_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Supprimer un livreur par ID
const deleteLivreur = async (req, res) => {
    try {
        const result = await Livreur.destroy({ where: { livreur_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createLivreur, getAllLivreurs, getLivreurById, updateLivreur, deleteLivreur };