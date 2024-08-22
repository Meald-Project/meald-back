const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Restaurant = require('../models/Restaurant');

// Helper function to check required fields
const checkRequiredFields = (fields, res) => {
  for (const field of fields) {
    if (field.value === undefined || field.value === null) {
      res.status(400).json({ error: `${field.name} is required` });
      return false;
    }
  }
  return true;
};

// Signup User
const signupUser = async (req, res) => {
  try {
    const { nom, email, motdepasse, addresse, telephone, role } = req.body;

    if (!checkRequiredFields([
      { name: 'nom', value: nom },
      { name: 'email', value: email },
      { name: 'motdepasse', value: motdepasse },
      { name: 'addresse', value: addresse },
      { name: 'telephone', value: telephone },
      { name: 'role', value: role }
    ], res)) return;

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
    console.error('Error during user signup:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, motdepasse } = req.body;

    if (!checkRequiredFields([
      { name: 'email', value: email },
      { name: 'motdepasse', value: motdepasse }
    ], res)) return;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(motdepasse, user.motdepasse);

    if (!isMatch) {
      return res.status(400).json({ error: 'Mot De Passe Incorrecte' });
    }

    const token = jwt.sign({ user_id: user.user_id }, 'your_secret_key', { expiresIn: '200h' });

    res.json({ token });
  } catch (err) {
    console.error('Error during user login:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Signup Restaurant
const signupRestaurant = async (req, res) => {
  try {
    const { nom, email, motdepasse, addresse, telephone } = req.body;

    if (!checkRequiredFields([
      { name: 'nom', value: nom },
      { name: 'email', value: email },
      { name: 'motdepasse', value: motdepasse },
      { name: 'addresse', value: addresse },
      { name: 'telephone', value: telephone }
    ], res)) return;

    const hashedPassword = await bcrypt.hash(motdepasse, 10);
    const newRestaurant = await Restaurant.create({
      nom,
      email,
      motdepasse: hashedPassword,
      addresse,
      telephone
    });

    const token = jwt.sign({ restaurant_id: newRestaurant.restaurant_id }, 'your_secret_key', { expiresIn: '200h' });

    res.json({ token });
  } catch (err) {
    console.error('Error during restaurant signup:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Login Restaurant
const loginRestaurant = async (req, res) => {
  try {
    const { email, motdepasse } = req.body;

    if (!checkRequiredFields([
      { name: 'email', value: email },
      { name: 'motdepasse', value: motdepasse }
    ], res)) return;

    const restaurant = await Restaurant.findOne({ where: { email } });

    if (!restaurant) {
      return res.status(400).json({ error: 'Restaurant not found' });
    }

    const isMatch = await bcrypt.compare(motdepasse, restaurant.motdepasse);

    if (!isMatch) {
      return res.status(400).json({ error: 'Mot De Passe Incorrecte' });
    }

    const token = jwt.sign({ restaurant_id: restaurant.restaurant_id }, 'your_secret_key', { expiresIn: '200h' });

    res.json({ token });
  } catch (err) {
    console.error('Error during restaurant login:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { signupUser, signupRestaurant, loginUser, loginRestaurant };