/* eslint-disable consistent-return */
// eslint-disable-next-line new-cap
const router = require('express').Router();
const multer = require('multer');
const { Work_Photo } = require('../db/models');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('here');
    console.log('destination', file);

    cb(null, './public/uploads/');
  },
  filename: (req, file, cb) => {
    console.log('filename', file);

    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const uploadarray = upload.array('uploadImages', 10);

router.post('/img', uploadarray, async (req, res) => {
  try {
    const user_id = req.session.user.id;
    const arrayofimg = req.files;

    const imgFromDB = arrayofimg?.map(
      ((img, i) => Work_Photo.create({
        user_id,
        img: arrayofimg[i].path.replace('public', ''),
      })),
    );
    const imgs = await Promise.all(imgFromDB);
    return res.json({ arrayofimg: imgs });

    //   arrayofimg?.map(
    //     await ((img, i) => Work_Photo.create({
    //       user_id,
    //       img: arrayofimg[i].path.replace('public', ''),
    //     })),
    //   );
    //   res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
