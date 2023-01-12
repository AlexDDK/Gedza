const Router = require('express');

const router = new Router();

// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');

// Импортируем функции из контролера
const {
  writeToDB, readFromDB
} = require('../controllers/masterController');

router.post('/add', writeToDB);
router.get('/take/:id', readFromDB);
// router.post('/login', login);
// router.get('/logout', logout);
// router.put('/put', changeUser);
// router.get('/auth', isAuthMiddleware, checkAuth);

module.exports = router;
