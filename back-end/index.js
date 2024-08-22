const express = require('express');
const cors = require('cors');
const db = require('./config/index.js');
const app = express();

const userRouter = require('./routes/UserR.js');
const livreurRouter = require('./routes/livreur.js');
const restaurantRouter = require('./routes/RestaurantR.js');
const categorieRouter = require('./routes/CategoriesR.js');
const articleRouter = require('./routes/ArticleR.js');
const clientRouter = require('./routes/ClientR.js');
const commandeRouter = require('./routes/CommandeR.js');
const paymentRouter = require('./routes/PaiementR.js');
const ratingRouter = require('./routes/RaitingR.js');
const depotLivreurRouter = require('./routes/DepotLivreurR.js');
const articleCommandeRouter = require('./routes/AriticleCommandeR.js');
const AuthRouter = require('./routes/Auth.js');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);
app.use('/api/livreurs', livreurRouter);
app.use('/api/restaurants', restaurantRouter);
app.use('/api/categories', categorieRouter);
app.use('/api/articles', articleRouter);
app.use('/api/clients', clientRouter);
app.use('/api/commandes', commandeRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/ratings', ratingRouter);
app.use('/api/depot-livreurs', depotLivreurRouter);
app.use('/api/article-commandes', articleCommandeRouter);
app.use('/api/auth', AuthRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
