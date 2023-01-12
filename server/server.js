const express = require('express');

const port = process.env.PORT || 3030; // задаем порт
const app = express(); // инициализируем express
const path = require('path'); // Устанавливаем метод склеивания путей
const session = require('express-session'); // Устанавливаем пакет сессий в проект
const FileStore = require('session-file-store')(session); // Указываем где хранить сессии
const cors = require('cors');
// const fileUpload = require('express-fileupload');

const fetch = require('node-fetch'); // Инициализируем фетчи

// const { Название моделей } = require('sequelize'); // Ставим модели в проект

const indexRouter = require('./routes/indexRouter'); // Инициализируем роутeры
const errorHandler = require('./middleware/ErrorHandlingMiddleware'); // Роутер для отлова ошибок

app.use(express.static(path.join(process.env.PWD, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
// app.use(fileUpload({}));
app.use(cors({
  origin: true,
  credentials: true,
}));

// Инициализируем сессии в проекте
const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  store: new FileStore(),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

// Запускаем мидлвару сессиий
app.use(session(sessionConfig));

// Мидлвар для передачи данных из сессии
app.use((req, res, next) => {
  res.locals.userName = req.session?.name;
  res.locals.id = req.session?.user?.id; // Если задать session.id — передастся id сесии!
  next();
});

// Вызываем роутеры в мидлварах
app.use((req, res, n) => {
  console.log('/');
  n();
});
app.use('/api', indexRouter);

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  console.log('111111');
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Мидлвер работы над ошибками регистрируется в самом конце
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server has been sterted on port ${port}`);
});
