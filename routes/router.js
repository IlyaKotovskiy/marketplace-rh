const usersRouter = require('./user.route');

const router = (app) => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Node.js and Express REST API'
    });
  });

  // Регистрация роутеров
  app.use('/users', usersRouter);
};

module.exports = router;