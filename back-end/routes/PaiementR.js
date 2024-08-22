const express = require('express');
const router = express.Router();
const {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePayment,
    deletePayment
} = require('../controllers/PaiementC');

router.post('/payment', createPayment);
router.get('/payments', getAllPayments);
router.get('/payment/:id', getPaymentById);
router.put('/payment/:id', updatePayment);
router.delete('/payment/:id', deletePayment);

module.exports = router;
