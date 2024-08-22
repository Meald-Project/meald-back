const Client =require('../models/Client')
const Commande =require('../models/Commande')
const  User = require('../models/User');

// Créer un client
const createClient = async (req, res) => {
    try {
        const result = await Client.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir tous les clients
const getAllClients = async (req, res) => {
    try {
        const result = await Client.findAll({ include: [User] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir un client par ID
const getClientById = async (req, res) => {
    try {
        const result = await Client.findByPk(req.params.id, { include: [User, Commande] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Mettre à jour un client par ID
const updateClient = async (req, res) => {
    try {
        const result = await Client.update(req.body, { where: { client_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Supprimer un client par ID
const deleteClient = async (req, res) => {
    try {
        const result = await Client.destroy({ where: { client_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createClient, getAllClients, getClientById, updateClient, deleteClient };