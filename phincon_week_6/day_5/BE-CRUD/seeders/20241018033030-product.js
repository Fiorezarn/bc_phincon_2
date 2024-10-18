"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = [];

    for (let i = 1; i <= 20; i++) {
      products.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price({ min: 100, max: 200 }),
        stock: faker.number.int({ min: 10, max: 100 }),
        categoryId: faker.number.int({ min: 1, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert("Products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
