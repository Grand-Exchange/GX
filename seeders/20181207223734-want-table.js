'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
	return queryInterface.bulkInsert('Want' [
		{
			userID: 1,
			itemID: 27
		},
		{
			userID: 1,
			itemID: 31
		},
		{
			userID: 1,
			itemID: 23
		},
		{
			userID: 1,
			itemID: 14
		},
		{
			userID: 2,
			itemID: 15
		},
		{
			userID: 2,
			itemID: 7
		},
		{
			userID: 3,
			itemID: 1
		}
	], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
