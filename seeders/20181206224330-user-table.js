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
    return queryInterface.bulkInsert('users', [
	    {
		    userName: 'sunnymemesl',
		    password: 'orangemushroom',
		    email: 'email@email.com',
		    firstName: 'Sunny',
		    lastName: 'L',
		    numTrade: '1337',
		    description: 'sunnymemesl description here'
	    },
  	    {
		    userName: 'gridmanx',
		    password: 'rikkaiswaifu',
		    email: 'gridmanrikka@gmail.com',
		    firstName: 'Jin',
		    lastName: 'L',
		    numTrade: '3',
		    description: 'only trade rikka goods'
	    },
	    {
		    userName: 'wework',
		    password: 'yellowpencil',
		    email: 'www12345@gmail.com',
		    firstName: 'we',
		    lastName: 'work',
		    numTrade: '248',
		    description: 'fps lover'
	    },
	    {
		    userName: 'garry',
		    password: 'kawaiii',
		    email: 'djfdsg@gadsgd.com',
		    firstName: 'Gaaarry',
		    lastName: 'L',
		    numTrade: '872',
		    description: 'software enginer'
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
