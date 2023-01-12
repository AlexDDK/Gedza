const Router = require('express');

const router = new Router();

// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');

// Импортируем функции из контролера
const {
  signup, login, logout, checkAuth, changeUser, changeBookFormUser, getByUrl
} = require('../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.put('/put', changeUser);
router.get('/auth', isAuthMiddleware, checkAuth);
router.put('/putForm', changeBookFormUser);
router.get('/getByUrl/:url', getByUrl);

module.exports = router;
