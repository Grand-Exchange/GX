'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trade = sequelize.define('Trade', {
    userID_a: DataTypes.INTEGER,
    userID_b: DataTypes.INTEGER,
    itemID_a: DataTypes.INTEGER,
    itemID_b: DataTypes.INTEGER,
    tradeTime: DataTypes.DATE
  }, {});
  Trade.associate = function(models) {
    // associations can be defined here
    Trade.belongsTo(models.User, { foreignKey: 'userID_a', targetKey: 'id'});
    Trade.belongsTo(models.User, { foreignKey: 'userID_b', targetKey: 'id'});

    Trade.belongsTo(models.Item, { foreignKey: 'itemID_a', targetKey: 'id'});
    Trade.belongsTo(models.Item, { foreignKey: 'itemID_b', targetKey: 'id'});
  };
  return Trade;
};
