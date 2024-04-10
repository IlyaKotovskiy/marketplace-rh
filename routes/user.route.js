// Для разделения основного файла маршрутизатора router.js на отдельные файлы, соответствующие конкретным наборам маршрутов,
// можено использовать подход модульного разделения кода в Node.js с помощью модуля Express.Router.


const express = require('express');
const db = require('../database');
const Users = db.users;
const usersRouter = express.Router();

// GET запрос на получение пользоватлей
usersRouter.get('/', async (req, res) => {
  try {
    const result = await Users.findAll();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Ошибка получения пользователей' });
  }
});

// POST запрос на добавление нового пользователя
usersRouter.post('/new', async (req, res) => {
  try {
    const {name, secondName } = req.body;
    const newUser = await Users.create({
      name,
      secondname: secondName
    });
    res.json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: 'Ошибка при создании пользователя' });
  }
});

module.exports = usersRouter;