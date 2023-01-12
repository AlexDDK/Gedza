/* eslint-disable consistent-return */
const { Master } = require('../db/models');
const ApiError = require('../error/ApiError');

// Записываем мастеров
const writeToDB = async (req, res, next) => {
  try {
    const {
      id, name, specialization, avatar_big, company_id, salon_id
    } = req.body;
    const user_id = req.session?.user?.id;

    const newMaster = await Master.create({
      salon_id,
      user_id,
      yc_master_id: id,
      name,
      specialization,
      information: '',
      avatar_big
    });
    return res.json(newMaster);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

const readFromDB = async (req, res, next) => {
  const { id } = req.params;
  const user_id = id;

  try {
    const masters = await Master.findAll({ where: { user_id } });
    return res.json(masters);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

module.exports = {
  writeToDB, readFromDB
};
