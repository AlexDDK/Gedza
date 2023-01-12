const Router = require('express');

const router = new Router();

// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');

// Импортируем функции из контролера
const {
  writeToDBrew, readFromDBrew
} = require('../controllers/reviewController');

router.post('/add', writeToDBrew);
router.get('/take/:id', readFromDBrew);
// router.post('/login', login);
// router.get('/logout', logout);
// router.put('/put', changeUser);
// router.get('/auth', isAuthMiddleware, checkAuth);

module.exports = router;
