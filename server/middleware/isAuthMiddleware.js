/* eslint-disable consistent-return */
// Мидлвара для проверки авторизации

const isAuthMiddleware = (req, res, next) => {
  if (req.session.user.id) {
    next();
  } else {
    return res.sendStatus(403);
  }
};

module.exports = isAuthMiddleware;
