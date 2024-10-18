"use strict";

const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = [];

    for (let i = 1; i <= 5; i++) {
      categories.push({
        name: faker.commerce.department(),
      });
    }

    return queryInterface.bulkInsert("Categories", categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
