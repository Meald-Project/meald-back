const express = require('express');
const router = express.Router();
const {
    createDepotLivreur,
    getAllDepotLivreurs,
    getDepotLivreurById,
    updateDepotLivreur,
    deleteDepotLivreur
} = require('../controllers/DepotLivreur');

router.post('/depotlivreur', createDepotLivreur);
router.get('/depotlivreurs', getAllDepotLivreurs);
router.get('/depotlivreur/:id', getDepotLivreurById);
router.put('/depotlivreur/:id', updateDepotLivreur);
router.delete('/depotlivreur/:id', deleteDepotLivreur);

module.exports = router;
