import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pool from './connection.js';
import bcrypt from 'bcrypt';

const app = express();
const port = 3300;

app.use(bodyParser.json());
app.use(cors());

app.get('/questions', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.question');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM public.question WHERE id = $1', [id]);
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
    const { qtext, answer, latitude, longitude } = req.body;

    const result = await pool.query(
      'INSERT INTO public.question (qtext, answer, latitude, longitude, geom) VALUES ($1, $2, $3, $4, ST_SetSRID(ST_MakePoint($4, $3), 4326)) RETURNING *',
      [qtext, answer, latitude, longitude]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { qtext, answer, latitude, longitude } = req.body;

    const result = await pool.query(
      'UPDATE public.question SET qtext = $1, answer = $2, latitude = $3, longitude = $4, geom = ST_SetSRID(ST_MakePoint($4, $3), 4326) WHERE id = $5 RETURNING *',
      [qtext, answer, latitude, longitude, id]
    );

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
    const result = await pool.query('DELETE FROM public.question WHERE id = $1 RETURNING *', [id]);
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
    const result = await pool.query('SELECT * FROM public.user');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM public.user WHERE id = $1', [id]);
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'INSERT INTO public.user (username, email, password, isadmin) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, email, hashedPassword, isadmin]
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      'UPDATE public.user SET username = $1, email = $2, password = $3, isadmin = $4 WHERE id = $5 RETURNING *',
      [username, email, hashedPassword, isadmin, id]
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
    const result = await pool.query('DELETE FROM public.user WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/adminlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM public.user WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    if (!user.isadmin) {
      return res.status(403).json({ error: 'You do not have permission for admin login.' });
    }

    res.json({ message: 'Login successful', redirect: '/admin' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during login.' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM public.user WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    res.json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login.' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
