/* eslint-disable consistent-return */
// Функции для работы с URL

const { Url } = require('../db/models');
const ApiError = require('../error/ApiError');

// Получение URL

const getUrl = async (req, res, next) => {
  const { id } = req.params;
  try {
    const url = await Url.findOne({ where: { user_id: id } });
    console.log('url', url);
    console.log('template', url.template);
    return res.status(200).json(url);
  } catch (e) {
    return res.status(400).json('Непредвиденная ошибка. Свяжитесь со службой поддержки');
  }
};

// Изменение URL
const changeUrl = async (req, res, next) => {
  const { id } = req.session.user;
  const { newUrl } = req.body;

  // Проверка на оригиальность
  const isUrl = await Url.findOne({ where: { url: newUrl } });

  if (isUrl) {
    return res.status(403).json('Такой адрес уже существует. Попробуйте другой');
  }

  try {
    const updateUrl = await Url.update({ url: newUrl }, { where: { user_id: id } });
    return res.status(200).json(updateUrl);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
  return res.status(400).json('Непредвиденная ошибка. Свяжитесь со службой поддержки');
};

module.exports = { changeUrl, getUrl };
