const pool = require('../database/db');

const router = (app) => {
  app.get('/', (req, res) => {
    res.send({
      message: 'Node.js and Express REST API'
    });
  });

  // GET запрос на получение пользоватлей
  app.get('/users', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM users');
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  });

  // POST запрос на добавление нового пользователя
  app.post('/users/new', async (req, res) => {
    try {
      const { id, name, secondname } = req.body;
      const query = 'INSERT INTO users (id, name, secondname) VALUES ($1, $2, $3) RETURNING *';
      const values = [id, name, secondname];
      const { rows } = await pool.query(query, values);
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  });
};

module.exports = router;