/* eslint-disable consistent-return */
const { Review } = require('../db/models');
const ApiError = require('../error/ApiError');

const writeToDBrew = async (req, res, next) => {
  const {
    user_name, text
  } = req.body;
  const user_id = req.session?.user?.id;

  try {
    const newReview = await Review.create({
      client_name: user_name,
      title: text,
      user_id,
    });
    return res.json(newReview);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

const readFromDBrew = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user_id = id;

    const salons = await Review.findAll({ where: { user_id } });
    return res.json(salons);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

module.exports = {
  writeToDBrew, readFromDBrew
};
