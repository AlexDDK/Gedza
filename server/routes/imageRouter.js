const Router = require('express');

const router = new Router();

// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');

// Импортируем функции из контролера
const {
  readFromDBImage, writeToDBImage
} = require('../controllers/imageController');

router.post('/add', writeToDBImage);
router.get('/take/:id', readFromDBImage);

module.exports = router;
