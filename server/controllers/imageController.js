/* eslint-disable consistent-return */
const { Work_Photo: WorkPhoto } = require('../db/models');
const ApiError = require('../error/ApiError');

const readFromDBImage = async (req, res, next) => {
  const { id } = req.params;
  const user_id = id;
  try {
    const user = await WorkPhoto.findAll({ where: { user_id } });
    return res.json(user);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
};

const writeToDBImage = async (req, res, next) => {
};

module.exports = {
  readFromDBImage, writeToDBImage
};
