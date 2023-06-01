const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'denchik_ne@mail.ru',
          name: 'Денчик',
          password: await bcrypt.hash('123', 10),
          points: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'kolya_ne@mail.ru',
          name: 'Коля',
          password: await bcrypt.hash('123', 10),
          points: 10000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'sofa_pochti_ne@mail.ru',
          name: 'Софа',
          password: await bcrypt.hash('123', 10),
          points: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
