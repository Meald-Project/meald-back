const Livreur= require('../models/livreur');
const Restaurant =require('../models/Restaurant')
const Commande =require('../models/Commande')
const Client =require('../models/Client')
const ArticleCommande =require('../models/ArticleCommande')

// Créer une commande
const createCommande = async (req, res) => {
    try {
        const result = await Commande.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir toutes les commandes
const getAllCommandes = async (req, res) => {
    try {
        const result = await Commande.findAll({ include: [Client, Restaurant, Livreur, ArticleCommande] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir une commande par ID
const getCommandeById = async (req, res) => {
    try {
        const result = await Commande.findByPk(req.params.id, { include: [Client, Restaurant, Livreur, ArticleCommande] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Mettre à jour une commande par ID
const updateCommande = async (req, res) => {
    try {
        const result = await Commande.update(req.body, { where: { commande_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Supprimer une commande par ID
const deleteCommande = async (req, res) => {
    try {
        const result = await Commande.destroy({ where: { commande_id: req.params.id } });
        res.json(result);
    } catch (error) { 
        res.send(error);
    }
};

module.exports = { createCommande, getAllCommandes, getCommandeById, updateCommande, deleteCommande };