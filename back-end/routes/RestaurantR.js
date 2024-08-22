const express = require('express');
const router = express.Router();
const {
    createRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant
} = require('../controllers/Restaurant');

router.post('/restaurant', createRestaurant);
router.get('/restaurants', getAllRestaurants);
router.get('/restaurant/:id', getRestaurantById);
router.put('/restaurant/:id', updateRestaurant);
router.delete('/restaurant/:id', deleteRestaurant);

module.exports = router;
