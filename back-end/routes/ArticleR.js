const express = require('express');
const router = express.Router();
const {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle
} = require('../controllers/Article');

router.post('/article', createArticle);
router.get('/articles', getAllArticles);
router.get('/article/:id', getArticleById);
router.put('/article/:id', updateArticle);
router.delete('/article/:id', deleteArticle);

module.exports = router;
