/* eslint-disable consistent-return */
const { Service } = require('../db/models');
const ApiError = require('../error/ApiError');

const writeToDBser = async (req, res, next) => {
  const {
    id, title, price_min, comment, image_group, category_id
  } = req.body;
  const user_id = req.session?.user?.id;

  try {
    const newService = await Service.create({
      yc_cat_id: category_id,
      yc_serv_id: id,
      user_id,
      title,
      comment,
      path: image_group.images?.basic.path,
      price_min,
    });
    return res.json(newService);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

const readFromDBser = async (req, res, next) => {
  const { id } = req.params;
  const user_id = id;

  try {
    const salons = await Service.findAll({ where: { user_id } });
    return res.json(salons);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

module.exports = {
  writeToDBser, readFromDBser
};
