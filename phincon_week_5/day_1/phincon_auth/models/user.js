"use strict";
const { Model } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasOne(models.Profile, {
        foreignKey: "pr_us_id",
        as: "profile",
      });
      models.User.belongsToMany(models.Role, {
        through: models.UserRole,
        foreignKey: "ur_us_id",
        as: "roles",
      });
    }
  }
  User.init(
    {
      us_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      us_fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      us_username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      us_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      us_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      us_created_on: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      us_created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      us_updated_on: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      us_updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: false,
    }
  );
  return User;
};
