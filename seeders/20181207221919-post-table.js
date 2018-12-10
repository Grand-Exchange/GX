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
	return queryInterface.bulkInsert('post', [
		{
			userID: 1,
			itemID: 1,
			description: '',
			image: ''
		},
		{
			userID: 2,
			itemID: 3,
			description: '',
			image: ''
		},
		{
			userID: 2,
			itemID: 1,
			description: '',
			image: ''
		},
		{
			userID: 2,
			itemID: 27,
			description: '',
			image: ''
		},
		{
			userID: 1,
			itemID: 15,
			description: '',
			image: ''
		},
		{
			userID: 3,
			itemID: 23,
			description: '',
			image: ''
		},
		{
			userID: 2,
			itemID: 9,
			description: '',
			image: ''
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
