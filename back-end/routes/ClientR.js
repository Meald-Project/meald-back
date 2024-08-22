const express = require('express');
const router = express.Router();
const {
    createClient,
    getAllClients,
    getClientById,
    updateClient,
    deleteClient
} = require('../controllers/Client');

router.post('/client', createClient);
router.get('/clients', getAllClients);
router.get('/client/:id', getClientById);
router.put('/client/:id', updateClient);
router.delete('/client/:id', deleteClient);

module.exports = router;
