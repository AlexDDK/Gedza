const Router = require('express');

const router = new Router();

// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');

// Импортируем функции из контролера
const {
  readFromDBbook
} = require('../controllers/bookController');

router.get('/take/:id', readFromDBbook);
// router.post('/login', login);
// router.get('/logout', logout);
// router.put('/put', changeUser);
// router.get('/auth', isAuthMiddleware, checkAuth);

module.exports = router;
