const Router = require('express');

const router = new Router();

// Защищаем ручки от неавторизованных пользователей
const isAuthMiddleware = require('../middleware/isAuthMiddleware');

// Импортируем функции из контролера
const {
  writeToDBsal, readFromDBsal
} = require('../controllers/salonController');

router.post('/add', writeToDBsal);
router.get('/take/:id', readFromDBsal);
// router.post('/login', login);
// router.get('/logout', logout);
// router.put('/put', changeUser);
// router.get('/auth', isAuthMiddleware, checkAuth);

module.exports = router;















// router
//   .route('/')
//   .post(async (req, res) => {
//     try {
//       const user_id = req.session?.user?.id;
//       const userUrl = await Url.findOne({ where: { user_id } });
//       const {
//         id: yc_id,
//         title,
//         logo,
//         short_descr,
//         phone,
//         address,
//         city,
//         schedule,
//       } = req.body;

//       const {
//         facebook,
//         instagram,
//         vk,
//         telegram,
//         whatsapp,
//         viber
//       } = req.body.social;

//       const newSalon = await Salon.create({

//         yc_id,
//         user_id,
//         url_id: userUrl.id,
//         title,
//         logo,
//         short_descr,
//         phone,
//         address,
//         city,
//         schedule,
//         facebook,
//         instagram,
//         vk,
//         telegram,
//         whatsapp,
//         viber,

//       });
//       res.json(newSalon);
//     } catch (error) {
//       console.log(error);
//       res.sendStatus(500);
//     }
//   })
//   .get(readFromDBsal);


