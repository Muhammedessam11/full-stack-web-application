const express = require('express');
const knex = require('knex');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Database connection
const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'testdb',
  },
});

app.use(bodyParser.json());

// Routes
app.get('/api/items', async (req, res) => {
  try {
    const items = await db.select('*').from('items');
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

app.post('/api/items', async (req, res) => {
  try {
    const { name, description } = req.body;
    const [id] = await db('items').insert({ name, description });
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
