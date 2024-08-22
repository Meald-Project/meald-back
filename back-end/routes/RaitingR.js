const express = require('express');
const router = express.Router();
const {
    createRating,
    getAllRatings,
    getRatingById,
    updateRating,
    deleteRating
} = require('../controllers/RatingC');

router.post('/rating', createRating);
router.get('/ratings', getAllRatings);
router.get('/rating/:id', getRatingById);
router.put('/rating/:id', updateRating);
router.delete('/rating/:id', deleteRating);

module.exports = router;
