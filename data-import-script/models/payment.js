'use strict';
const { schema, option } = require('./schema/payment');

module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', schema, option);
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};
