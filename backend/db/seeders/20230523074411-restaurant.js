'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Restaurants',
      [
        {
          title: 'Betulla',
          img: 'https://prorus.ru/_/manager/files/61f/a7378dd7a2/BETULLA-005-result.jpg',
          totalgrade: 4,
        },
        {
          title: 'Birch',
          img: 'https://gcdn.tomesto.ru/img/place/000/024/562/restoran-birch-na-kirochnoy_edee6_full-270301.jpg',
          totalgrade: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Restaurants', null, {});
  },
};
