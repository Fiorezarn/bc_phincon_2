"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      us_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      us_username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      us_fullname: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      us_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      us_created_on: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      us_created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      us_updated_on: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      us_updated_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
