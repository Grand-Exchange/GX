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
	return queryInterface.bulkInsert('item', [
		{
			itemName: 'Forza Motorsport 7',
			itemType: '',
			UPC: '1'
		},
		{
			itemName: 'Monster Hunter: World',
			itemType: '',
			UPC: '2'
		},
		{
			itemName: 'The Elder Scrolls V: Skyrim',
			itemType: '',
			UPC: '3'
		},
		{
			itemName: 'God of War',
			itemType: '',
			UPC: '4'
		},
		{
			itemName: 'Tekken 7',
			itemType: '',
			UPC: '5'
		},
		{
			itemName: 'Fate Grand Order',
			itemType: '',
			UPC: '6'
		},
		{
			itemName: 'Doki Doki Literature Club!',
			itemType: '',
			UPC: '7'
		},
		{
			itemName: 'Overwatch',
			itemType: '',
			UPC: '8'
		},
		{
			itemName: 'Nier: Automata',
			itemType: '',
			UPC: '9'
		},
		{
			itemName: 'Deus Ex: Human Revolution',
			itemType: '',
			UPC: '10'
		},
		{
			itemName: 'Fortnite',
			itemType: '',
			UPC: '11'
		},
		{
			itemName: 'Kingdoms Heart 2.8',
			itemType: '',
			UPC: '12'
		},
		{
			itemName: 'Call of Duty: Black Ops 4',
			itemType: '',
			UPC: '13'
		},
		{
			itemName: 'Street Fighter V',
			itemType: '',
			UPC: '14'
		},
		{
			itemName: 'Counter Strike: Global Offensive',
			itemType: '',
			UPC: '15'
		},
		{
			itemName: 'Dishonored',
			itemType: '',
			UPC: '16'
		},
		{
			itemName: 'PlayerUnknown Battlegrounds',
			itemType: '',
			UPC: '17'
		},
		{
			itemName: 'Starcraft II',
			itemType: '',
			UPC: '18'
		},
		{
			itemName: 'Megadimension Neptunia VIIR',
			itemType: '',
			UPC: '19'
		},
		{
			itemName: 'The Last Of Us',
			itemType: '',
			UPC: '20'
		},
		{
			itemName: 'Dragon Ball FighterZ',
			itemType: '',
			UPC: '21'
		},
		{
			itemName: 'Grand Theft Auto V',
			itemType: '',
			UPC: '22'
		},
		{
			itemName: 'Diablo III',
			itemType: '',
			UPC: '23'
		},
		{
			itemName: 'Minecraft',
			itemType: '',
			UPC: '24'
		},
		{
			itemName: 'The Legend of Zelda: Breath of the Wild',
			itemType: '',
			UPC: '25'
		},
		{
			itemName: 'Red Dead Redemption',
			itemType: '',
			UPC: '26'
		},
		{
			itemName: 'Battlefield V',
			itemType: '',
			UPC: '27'
		},
		{
			itemName: 'Stardew Valley',
			itemType: '',
			UPC: '28'
		},
		{
			itemName: 'Fallout 76',
			itemType: '',
			UPC: '29'
		},
		{
			itemName: 'Kingdoms Heart 2.5',
			itemType: '',
			UPC: '30'
		},
		{
			itemName: 'Super Smash Bros Ultimate',
			itemType: '',
			UPC: '31'
		},
		{
			itemName: 'Sea of Thieves',
			itemType: '',
			UPC: '32'
		}
	],{});
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
