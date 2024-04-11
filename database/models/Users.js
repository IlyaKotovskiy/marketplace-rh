const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define("Users", {
    id: {
      type: Sequelize.STRING(36),
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    secondname: {
      type: Sequelize.STRING(100),
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'users'
  });
}