require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_HOST, DB_NAME } = process.env;
const FavoriteModel = require('../src/models/Favorite');
const UserModel = require('../src/models/User');

const sequelize = new Sequelize(
  `postgres://${DB_USER}@${DB_HOST}/${DB_NAME}`,
  { logging: false, native: false }
);

// Ejecuta la función de los modelos
FavoriteModel(sequelize);
UserModel(sequelize);

// Relaciona los modelos
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'user_favorites' });
Favorite.belongsToMany(User, { through: 'user_favorites' });

module.exports = {
  User,
  Favorite,
  ...sequelize.models,
  conn: sequelize,
};
