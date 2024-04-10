const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Matilda026', {
  // БД к которой подключаемся
  dialect: 'postgres',
  host: 'localhost'
  // logging: false
});

const Users = require('./models/Users')(sequelize);

module.exports = {
  sequelize,
  users: Users
}