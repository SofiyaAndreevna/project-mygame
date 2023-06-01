'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          comUserId: 1,
          comRestId: 2,
          title: 'Grade',
          text: 'Cool!',
          grade: 4,
        },
        {
          comUserId: 2,
          comRestId: 1,
          title: 'Grade',
          text: 'wow!',
          grade: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
