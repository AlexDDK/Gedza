/* eslint-disable consistent-return */
// Функции для работы с URL

const { Url } = require('../db/models');
const ApiError = require('../error/ApiError');

// Получение TEMPLATE по юзеру

const getTemplate = async (req, res, next) => {
  const { id } = req.params;
  try {
    const template = await Url.findOne({ where: { user_id: id } });
    return res.status(200).json(template);
  } catch (e) {
    return res.status(400).json('Непредвиденная ошибка. Свяжитесь со службой поддержки');
  }
};

// Изменение TEMPLATE
const changeTemplate = async (req, res, next) => {
  const { id } = req.session.user;
  const { payload } = req.body;
  try {
    const updateTemplate = await Url.update({ template: payload }, { where: { user_id: id } });
    return res.status(200).json(updateTemplate);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
  return res.status(400).json('Непредвиденная ошибка. Свяжитесь со службой поддержки');
};

module.exports = { changeTemplate, getTemplate };
