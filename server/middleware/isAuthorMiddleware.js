/* eslint-disable consistent-return */
// Мидлвара для проверки авторства юзера.
// Провряет то, что приходит с фронта

const isAuthorMiddleware = (req, res, next) => {
  const { user_id } = req.body;
  if (user_id === req.session.user.id) {
    next();
  } else {
    console.log('Ощибка доступа');
    return res.sendStatus(403);
  }
};

module.exports = isAuthorMiddleware;
