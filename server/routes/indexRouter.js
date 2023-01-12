const Router = require('express');

const router = new Router();
// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');

// Импортируем роутеры
const userRouter = require('./userRouter');
const salonRouter = require('./salonRouter');
const uploadRouter = require('./uploadRouter');
const urlRouter = require('./urlRouter');
const masterRouter = require('./masterRouter');
const categoryRouter = require('./categoryRouter');
const serviceRouter = require('./serviceRouter');
const reviewRouter = require('./reviewRouter');
const bookRouter = require('./bookRouter');
const imageRouter = require('./imageRouter');
const templateRouter = require('./templateRouter');

// router.use((req, res, n) => {
//   console.log('/api');
//   n();
// });
// Прописываем пути
router.use('/upload', uploadRouter);
router.use('/user', userRouter);
router.use('/salon', salonRouter);
router.use('/url', urlRouter);
router.use('/master', masterRouter);
router.use('/cats', categoryRouter);
router.use('/service', serviceRouter);
router.use('/review', reviewRouter);
router.use('/books', bookRouter);
router.use('/image', imageRouter);
router.use('/template', templateRouter);

module.exports = router;
