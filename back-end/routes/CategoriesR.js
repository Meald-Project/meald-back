const express = require('express');
const router = express.Router();
const {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} = require('../controllers/CategoriesC');

router.post('/category', createCategory);
router.get('/categorys', getAllCategories);
router.get('/category/:id', getCategoryById);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

module.exports = router;
