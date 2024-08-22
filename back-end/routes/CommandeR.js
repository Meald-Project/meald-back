const express = require('express');
const router = express.Router();
const {
    createCommande,
    getAllCommandes,
    getCommandeById,
    updateCommande,
    deleteCommande
} = require('../controllers/Commande');

router.post('/commande', createCommande);
router.get('/commandes', getAllCommandes);
router.get('/commande/:id', getCommandeById);
router.put('/commande/:id', updateCommande);
router.delete('/commande/:id', deleteCommande);

module.exports = router;
