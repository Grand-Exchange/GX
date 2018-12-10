'use strict';
module.exports = (sequelize, DataTypes) => {
  const Want = sequelize.define('Want', {
    userID: DataTypes.INTEGER,
    itemID: DataTypes.INTEGER
  }, {});
  Want.associate = function(models) {
    // associations can be defined here
    Want.belongsTo(models.User, { foreignKey: 'userID', targetKey: 'id'});
    Want.belongsTo(models.Item, { foreignKey: 'itemID', targetKey: 'id'});
  };
  return Want;
};
