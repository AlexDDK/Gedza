const Router = require('express');

const router = new Router();

// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');
// Проверяем авторство
const isAuthorMiddleware = require('../middleware/isAuthorMiddleware');

// Импортируем функции из контролера
const { changeUrl, getUrl } = require('../controllers/urlController');

router.get('/:id', getUrl);
router.put('/put', changeUrl);

module.exports = router;
