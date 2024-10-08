"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          us_fullname: "Ojan",
          us_username: "ojan",
          us_password: await bcrypt.hashSync("12345678910", 10),
          us_email: "a@a.com",
          us_active: true,
          us_phone_number: "08123456789",
          us_created_on: new Date(),
          us_created_by: 1,
          us_updated_on: new Date(),
          us_updated_by: 1,
        },
        {
          us_fullname: "Ramadhanty",
          us_username: "ramadhanty",
          us_password: await bcrypt.hashSync("12345678910", 10),
          us_email: "b@b.com",
          us_active: true,
          us_phone_number: "08123456789",
          us_created_on: new Date(),
          us_created_by: 1,
          us_updated_on: new Date(),
          us_updated_by: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
