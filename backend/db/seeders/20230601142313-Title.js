"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Titles",
      [
        {
          title: "С подковырочкой :-)",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Фильмы и сериалы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Города и страны",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Titles", null, {});
  },
};
