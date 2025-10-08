import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  const { phone } = req.body || {};
  if (!phone || String(phone).trim().length < 8) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }
  const token = `mock-${Buffer.from(String(phone)).toString('base64')}`;
  const user = { id: String(phone), phone: String(phone) };
  res.json({ token, user });
});

export default router;