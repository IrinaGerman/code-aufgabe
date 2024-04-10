'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addIndex('Cities', ['cityName', 'count']);
    await queryInterface.addColumn('Cities', 'pictureLink', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('Cities', ['cityName', 'count']);
    await queryInterface.removeColumn('Cities', 'pictureLink');
  },
};
