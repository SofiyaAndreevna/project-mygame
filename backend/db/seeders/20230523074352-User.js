const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'nina@mail.ru',
          name: 'Nina',
          password: await bcrypt.hash('123', 10),
        },
        {
          email: 'max@mail.ru',
          name: 'Max',
          password: await bcrypt.hash('123', 10),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
