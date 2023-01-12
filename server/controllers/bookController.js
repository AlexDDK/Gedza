/* eslint-disable consistent-return */
const { User } = require('../db/models');
const ApiError = require('../error/ApiError');

const readFromDBbook = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ where: { id } });
    return res.json(user);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

module.exports = {
  readFromDBbook
};
