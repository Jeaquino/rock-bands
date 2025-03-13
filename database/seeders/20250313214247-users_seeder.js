"use strict";

/** @type {import('sequelize-cli').Migration} */

const path = require("path");
const directory = path.join(__dirname, "../../db/users.json");
const { readFile, parseFile } = require("../../utils/filesystem");
const bcrypt = require("bcrypt");
const users = parseFile(readFile(directory));

users.map((user) => {
  user.created_at = new Date();
  user.updated_at = new Date();
  user.contrasena = bcrypt.hashSync(user.contrasena, 10);
});

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
