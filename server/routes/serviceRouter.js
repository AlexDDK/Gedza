const Router = require('express');

const router = new Router();

// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');

// Импортируем функции из контролера
const {
  writeToDBser, readFromDBser
} = require('../controllers/serviceController');

router.post('/add', writeToDBser);
router.get('/take/:id', readFromDBser);
// router.post('/login', login);
// router.get('/logout', logout);
// router.put('/put', changeUser);
// router.get('/auth', isAuthMiddleware, checkAuth);

module.exports = router;
