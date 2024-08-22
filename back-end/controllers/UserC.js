const  User = require('../models/User');
const Livreur= require('../models/livreur');
const Client = require('../models/Client');
const bcrypt = require('bcryptjs');

// Create a user
const createUser = async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const result = await User.findAll();
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    try {
        const result = await User.findByPk(req.params.id, {
            include: [Livreur, Client]
        });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// Update user by ID
const updateUser = async (req, res) => {
    try {
        if (req.body.motdepasse) {
            req.body.motdepasse = await bcrypt.hash(req.body.motdepasse, 10);
        }

        const result = await User.update(req.body, { where: { user_id: req.params.id } });

        res.json(result);
    } catch (error) {
        console.error("Update User Error:", error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
// Delete user by ID
const deleteUser = async (req, res) => {
    try {
        const result = await User.destroy({ where: { user_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
