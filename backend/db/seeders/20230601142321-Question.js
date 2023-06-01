"use strict";

const question = require("../models/question");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        titleId: 1,
        text: "Самый просматриваемый видео-хостинг интернета – это...",
        answer: "Ютуб",
        points: 100,
      },
      {
        titleId: 1,
        text: "На какое дерево садится ворона во время дождя?",
        answer: "На мокрое",
        points: 200,
      },
      {
        titleId: 1,
        text: "Каких камней не бывает в реке?",
        answer: "Сухих",
        points: 300,
      },
      {
        titleId: 1,
        text: "Что не вместится в самую большую кастрюлю?",
        answer: "Rрышка",
        points: 500,
      },
      {
        titleId: 1,
        text: "Что может в одно и то же время  стоять и ходить, висеть и стоять, ходить и лежать?",
        answer: "Часы",
        points: 1000,
      },
      {
        titleId: 2,
        text: 'Как зовут главного героя сериала Netflix "Stranger Things", который пропадает без вести, что приводит к путешествию, полному сверхъестественных событий?',
        answer: "Уилл",
        points: 100,
      },
      {
        titleId: 2,
        text: 'Как называется вымышленный город, в котором происходит действие популярного телесериала "Друзья"?',
        answer: "Нью-Йорк",
        points: 200,
      },
      {
        titleId: 2,
        text: "Как звали секретаршу в телесериале «Офис»",
        answer: "Пэм",
        points: 300,
      },
      {
        titleId: 2,
        text: "Как зовут персонажа из сериала Во все тяжкие, который получил свой спин-офф?",
        answer: "Соул",
        points: 500,
      },
      {
        titleId: 2,
        text: "Как звали сову Гарри Поттера?",
        answer: "Букля",
        points: 1000,
      },
      {
        titleId: 3,
        text: "Там остатки коммунизма, хоть к Европе они близко.",
        answer: "Беларусь",
        points: 100,
      },
      {
        titleId: 3,
        text: "Этот не столица, называется как птица.",
        answer: "Орёл",
        points: 200,
      },
      {
        titleId: 3,
        text: "Это столица для армян, любимый город.",
        answer: "Ереван",
        points: 300,
      },
      {
        titleId: 3,
        text: "В названии какого города имя одного мальчика и имя ста девочек?",
        answer: "Севастополь",
        points: 500,
      },
      {
        titleId: 3,
        text: "В каком европейском государстве мы найдем три Я?",
        answer: "Австрия",
        points: 1000,
      },
    ];
    const questions = data.map((question) => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Questions", questions);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions");
  },
};
