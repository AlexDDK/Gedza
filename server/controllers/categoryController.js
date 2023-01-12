/* eslint-disable consistent-return */
const { Category } = require('../db/models');
const ApiError = require('../error/ApiError');

// Записываем мастеров
const writeCategoryToDB = async (req, res, next) => {
  const {
    id, salon_id, title
  } = req.body;
  const user_id = req.session?.user?.id;

  try {
    const newCategory = await Category.create({
      salon_id,
      user_id,
      yc_cat_id: id,
      title,
    });
    return res.json(newCategory);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

const readCategoryFromDB = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user_id = id;

    const masters = await Category.findAll({ where: { user_id } });
    return res.json(masters);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

module.exports = {
  writeCategoryToDB, readCategoryFromDB
};
