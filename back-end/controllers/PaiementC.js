const Payment =require ('../models/Paiement')
const Commande =require('../models/Commande')

// Créer un paiement
const createPayment = async (req, res) => {
    try {
        const result = await Payment.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir tous les paiements
const getAllPayments = async (req, res) => {
    try {
        const result = await Payment.findAll({ include: [Commande] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Obtenir un paiement par ID
const getPaymentById = async (req, res) => {
    try {
        const result = await Payment.findByPk(req.params.id, { include: [Commande] });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Mettre à jour un paiement par ID
const updatePayment = async (req, res) => {
    try {
        const result = await Payment.update(req.body, { where: { payment_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Supprimer un paiement par ID
const deletePayment = async (req, res) => {
    try {
        const result = await Payment.destroy({ where: { payment_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createPayment, getAllPayments, getPaymentById, updatePayment, deletePayment };