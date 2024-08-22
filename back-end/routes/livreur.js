const express = require('express');
const router = express.Router();
const {
    createLivreur,
    getAllLivreurs,
    getLivreurById,
    updateLivreur,
    deleteLivreur
} = require('../controllers/livreur');

router.post('/livreur', createLivreur);
router.get('/livreurs', getAllLivreurs);
router.get('/livreur/:id', getLivreurById);
router.put('/livreur/:id', updateLivreur);
router.delete('/livreur/:id', deleteLivreur);

module.exports = router;
