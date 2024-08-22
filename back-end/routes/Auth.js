const express = require('express');
const router = express.Router();
const {
    signupUser,
    signupRestaurant,
    loginUser,
    loginRestaurant
} = require('../controllers/Auth_user');

router.post('/signup', signupUser);
router.post('/signup/restaurant', signupRestaurant);
router.post('/login', loginUser);
router.post('/login/restaurant', loginRestaurant);


module.exports = router;