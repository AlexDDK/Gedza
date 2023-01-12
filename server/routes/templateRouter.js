const Router = require('express');

const router = new Router();

// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');
// Проверяем авторство
const isAuthorMiddleware = require('../middleware/isAuthorMiddleware');

// Импортируем функции из контролера
const { changeTemplate, getTemplate } = require('../controllers/templateController');

router.get('/:id', getTemplate);
router.put('/put', changeTemplate);

module.exports = router;
