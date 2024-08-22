const Restaurant =require('../models/Restaurant')
const Category =require ('../models/Categories')
const Commande =require('../models/Commande')
const bcrypt = require('bcryptjs');

// Creer un restaurant
const createRestaurant = async (req, res) => {
    try {
        const result = await Restaurant.create(req.body);
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// avoir tous les restaurants
const getAllRestaurants = async (req, res) => {
    try {
        const result = await Restaurant.findAll();
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// avoir un restaurant par ID
const getRestaurantById = async (req, res) => {
    try {
        const result = await Restaurant.findByPk(req.params.id, {
            include: [Category, Commande]
        });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

// modifier restaurant par ID
const updateRestaurant = async (req, res) => {
    try {

        if (req.body.mot_de_passe) {
  
            req.body.mot_de_passe = await bcrypt.hash(req.body.mot_de_passe, 10);
        }

        const result = await Restaurant.update(req.body, { where: { restaurant_id: req.params.id } });

        res.json(result);
    } catch (error) {
        console.error("Update Restaurant Error:", error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// supprimer un restaurant par ID
const deleteRestaurant = async (req, res) => {
    try {
        const result = await Restaurant.destroy({ where: { restaurant_id: req.params.id } });
        res.json(result);
    } catch (error) {
        res.send(error);
    }
};

module.exports = { createRestaurant, getAllRestaurants, getRestaurantById, updateRestaurant, deleteRestaurant };