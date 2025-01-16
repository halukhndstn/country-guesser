import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './connection.js';

const app = express();
const port = 3300;

app.use(bodyParser.json());
app.use(cors());

app.get('/questions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM question');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM question WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/questions', async (req, res) => {
  try {
    const { qtext } = req.body;
    const result = await pool.query('INSERT INTO question (qtext) VALUES ($1) RETURNING *', [qtext]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { qtext } = req.body;
    const result = await pool.query('UPDATE question SET qtext = $1 WHERE id = $2 RETURNING *', [qtext, id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM question WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Question not found' });
    }
    res.json({ message: 'Question deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM user_table');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM user_table WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/users', async (req, res) => {
  try {
    const { username, email, password, isadmin } = req.body;
    const result = await pool.query(
      'INSERT INTO user_table (username, email, password, isadmin) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, email, password, isadmin]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, isadmin } = req.body;
    const result = await pool.query(
      'UPDATE user_table SET username = $1, email = $2, password = $3, isadmin = $4 WHERE id = $5 RETURNING *',
      [username, email, password, isadmin, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM user_table WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
