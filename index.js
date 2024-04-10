const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const PORT = 4575;
const app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: '*',
  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  allowedHeaders: 'Content-Type, Authorization'
}));

app.use(express.json({
  extended: true
}));

router(app);

app.listen(PORT, (err) => {
  if (err) console.log('Error: ' + err);
  console.log('Server started on http://localhost:' + PORT);
});