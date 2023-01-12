/* eslint-disable consistent-return */
const { Salon, Url } = require('../db/models');
const ApiError = require('../error/ApiError');

const writeToDBsal = async (req, res, next) => {
  try {
    const user_id = req.session?.user?.id;
    const userUrl = await Url.findOne({ where: { user_id } });
    const {
      id: yc_id,
      title,
      logo,
      short_descr,
      phone,
      address,
      city,
      schedule,
    } = req.body;

    const {
      facebook,
      instagram,
      vk,
      telegram,
      whatsapp,
      viber
    } = req.body.social;

    const newSalon = await Salon.create({
      yc_id,
      user_id,
      url_id: userUrl.id,
      title,
      logo,
      short_descr,
      phone: whatsapp, // берем телефон из вотсапа, т.к. из YC он не приходит.
      address,
      city,
      schedule,
      facebook,
      instagram,
      vk,
      telegram,
      whatsapp,
      viber,
    });
    return res.json(newSalon);
  } catch (error) {
    res.sendStatus(500);
  }
};

const readFromDBsal = async (req, res, next) => {
  const { id } = req.params;
  const user_id = id;

  try {
    const salons = await Salon.findAll({ where: { user_id } });
    return res.json(salons);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }

  // return res.sendStatus(400);
};

module.exports = {
  readFromDBsal, writeToDBsal
};
