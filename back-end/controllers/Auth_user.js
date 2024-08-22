const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');

// Signup User

const signupUser = async (req, res) => {
  try {
    const { nom, email, motdepasse, addresse, telephone, role } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Votre email est déjà utilisé. Veuillez vous connecter.' });
    }

    const hashedPassword = await bcrypt.hash(motdepasse, 10);
    const newUser = await User.create({ 
      nom,
      email,
      motdepasse: hashedPassword,
      addresse,
      telephone,
      role
    });

    const token = jwt.sign({ user_id: newUser.user_id }, 'your_secret_key', { expiresIn: '200h' });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};


// Login User
const loginUser = async (req, res) => {
  try {
    const { email, motdepasse } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(motdepasse, user.motdepasse);

    if (!isMatch) {
      return res.status(400).json({ error: 'Mot De Passe Incorrecte' });
    }

    const token = jwt.sign({ user_id: user.user_id }, 'your_secret_key', { expiresIn: '200h' });

    res.json({ user ,token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Signup Restaurant
const signupRestaurant = async (req, res) => {
  try {
    const { nom, email, mot_de_passe, addresse, telephone } = req.body;

    const existingRestaurant = await Restaurant.findOne({ where: { email } });
    if (existingRestaurant) {
      return res.status(400).json({ error: 'Votre email est déjà utilisé. Veuillez vous connecter.' });
    }

    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);

    const newRestaurant = await Restaurant.create({
      nom,
      email,
      mot_de_passe: hashedPassword,
      addresse,
      telephone
    });

    const token = jwt.sign({ restaurant_id: newRestaurant.restaurant_id }, 'your_secret_key', { expiresIn: '200h' });

    res.json({ token });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};


// Login Restaurant
const loginRestaurant = async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;
    console.log("Received Login Request:", { email, mot_de_passe });

    const restaurant = await Restaurant.findOne({ where: { email } });
    console.log("Found Restaurant:", restaurant);

    if (!restaurant) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(mot_de_passe, restaurant.mot_de_passe);
    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ error: 'Mot De Passe Incorrecte' });
    }

    const token = jwt.sign({ restaurant_id: restaurant.restaurant_id }, 'your_secret_key', { expiresIn: '200h' });

    res.json({ restaurant, token });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { signupUser, signupRestaurant, loginUser, loginRestaurant };
