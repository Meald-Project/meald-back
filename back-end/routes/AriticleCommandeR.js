const express = require('express');
const router = express.Router();
const {
    createArticleCommande,
    getAllArticleCommandes,
    getArticleCommandeById,
    updateArticleCommande,
    deleteArticleCommande
} = require('../controllers/ArticleCommande');

router.post('/articlecommande', createArticleCommande);
router.get('/articlecommandes', getAllArticleCommandes);
router.get('/articlecommande/:id', getArticleCommandeById);
router.put('/articlecommande/:id', updateArticleCommande);
router.delete('/articlecommande/:id', deleteArticleCommande);

module.exports = router;
