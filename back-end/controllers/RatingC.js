const Restaurant =require('../models/Restaurant')
const Rating =require('../models/Rating')
const Client =require('../models/Client')
// Créer une évaluation
const createRating = async (req, res) => {
    try {
        const result = await Rating.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir toutes les évaluations
const getAllRatings = async (req, res) => {
    try {
        const result = await Rating.findAll({ include: [Client, Restaurant] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir une évaluation par ID
const getRatingById = async (req, res) => {
    try {
        const result = await Rating.findByPk(req.params.id, { include: [Client, Restaurant] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Mettre à jour une évaluation par ID
const updateRating = async (req, res) => {
    try {
        const result = await Rating.update(req.body, { where: { rating_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Supprimer une évaluation par ID
const deleteRating = async (req, res) => {
    try {
        const result = await Rating.destroy({ where: { rating_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createRating, getAllRatings, getRatingById, updateRating, deleteRating };
