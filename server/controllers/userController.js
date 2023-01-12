/* eslint-disable consistent-return */
// Функции для работы с юзером

const bcrypt = require('bcrypt');
const { nanoid } = require('nanoid');
const { User, Url } = require('../db/models');
const ApiError = require('../error/ApiError');
// Число хешей bcrypt для шифрования пароля
const saltRounds = 10;

// Регистрация пользователя
const signup = async (req, res, next) => {
  const {
    name, email, password, role = 'User'
  } = req.body;

  if (name && email && password) {
    try {
      const hashPass = await bcrypt.hash(password, saltRounds);
      const [newUser, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          name, email, password: hashPass, role
        }
      });

      // Проверка на повтор
      if (!created) {
        return res.status(409).json('Пользователь с таким email уже существует');
      }

      // Создаем случайный адрес сайта
      const newUrl = await Url.create({ user_id: newUser.id, url: nanoid(15), template: 1 });

      // Записываем в сессию
      req.session.user = {
        id: newUser.id,
        username: newUser.name,
        crm: newUser.yc_id,
        token: newUser.yc_user_token,
      };

      // Передаем на фронт
      return res.json({
        id: newUser.id,
        username: newUser.name,
        crm: newUser.yc_id,
      });
    } catch (e) {
      return res.status(400).json('Ошибка базы данных. Свяжитесь со службой поддержки');
    }
  }
  return res.status(500).json('Непредвиденная ошибка. Свяжитесь со службой поддержки');
};

// Аунтантификация пользователя
const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const user = await User.findOne({ where: { email } });

      // Ответ по несуществующеу юзеру
      if (!user) {
        return res.status(404).json('Пользователь с такой почтой не обнаружен');
      }

      if (await bcrypt.compare(password, user.password)) {
        // Ищем адрес юзера
        const userUrl = await Url.findOne({ where: { user_id: user.id } });

        // Записываем в сессию
        req.session.user = {
          id: user.id,
          username: user.name,
          crm: user.yc_id,
          token: user.yc_user_token,
        };

        // Передаем на фронт
        return res.json({
          id: user.id,
          username: user.name,
          crm: user.yc_id,
        });
      }
      // При неверном пароле
      return res.status(404).json('Неверный пароль. Попробуйте еще раз');
    } catch (e) {
      return res.status(400).json('Ошибка базы данных. Свяжитесь со службой поддержки');
    }
  }
  return res.status(500).json('Непредвиденная ошибка. Свяжитесь со службой поддержки');
};

// Логаут пользователя
const logout = async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(201);
};

// Проверка, есть ли такой пользователь
const checkAuth = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    const userUrl = await Url.findOne({ where: { user_id: user.id } });

    // Передаем на фронт
    return res.json({
      id: user.id,
      username: user.name,
      crm: user.yc_id,
    });
  } catch (e) {
    return res.sendStatus(400);
  }
};

// Добавление пользователю токена и id YClients
const changeUser = async (req, res, next) => {
  try {
    const { id } = req.session.user;
    const { yc_user_token, yc_id } = req.body;

    // Проверка на повторяющийся yc_id
    const user = await User.findOne({ where: { yc_id } });

    if (user) {
      return res.status(404).json('Пользователь с таким YClients ID уже существует');
    }

    const updateUser = await User.update({ yc_user_token, yc_id }, { where: { id } });

    return res.status(200).json(updateUser);
  } catch (e) {
    return res.status(400).json('Ошибка базы данных. Свяжитесь со службой поддержки');
  }
};

// Добавление пользователю booking Form
const changeBookFormUser = async (req, res, next) => {
  try {
    const { id } = req.session.user;
    const { bookForm } = req.body;

    const updateUser = await User.update({ bookForm }, { where: { id } });

    return res.sendStatus(200);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
  return res.sendStatus(400);
};

const getByUrl = async (req, res, next) => {
  try {
    const { url } = req.params;

    const user = await Url.findOne({ where: { url } });

    if (user) {
      return res.json(user);
    }
    return res.status(418).json('Такой страницы не существует');
  } catch (e) {
    return res.status(400).json('Ошибка базы данных. Свяжитесь со службой поддержки');
  }
};

module.exports = {
  signup, login, logout, checkAuth, changeUser, changeBookFormUser, getByUrl
};
