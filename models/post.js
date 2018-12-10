'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userID: DataTypes.INTEGER,
    itemID: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: 'userID', targetKey: 'id'});
    Post.belongsTo(models.Item, { foreignKey: 'itemID', targetKey: 'id'});
  };
  return Post;
};
