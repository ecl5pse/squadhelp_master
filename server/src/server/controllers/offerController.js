const bd = require('../models/index');
const { Op } = require("sequelize");

module.exports.getOffer = async (req, res, next) => {
  try {
    const findOffer = await bd.Offers.findAll({
      attributes: ['fileName'],
    });

    if (findOffer) {
      res.send(findOffer);
    }
  } catch (e) {
    next(e);
  }

};


