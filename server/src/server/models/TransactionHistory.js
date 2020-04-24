'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('TransactionHistory', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },

        sum: {
          allowNull: false,
          type: DataTypes.DOUBLE
        },

      },
  );

















}
