import express from 'express';
import {
  getAll,
  getById,
  create,
  update,
  remove,
  buy as buyListing
} from '../data/store.js';

const router = express.Router();

// GET /api/listings
router.get('/', (req, res) => {
  res.json(getAll());
});

// GET /api/listings/:id
router.get('/:id', (req, res) => {
  const listing = getById(req.params.id);
  if (!listing) return res.status(404).json({ error: 'Not found' });
  res.json(listing);
});

// POST /api/listings
router.post('/', (req, res) => {
  const { title, description, price, stock, imageUrl } = req.body || {};
  if (!title) return res.status(400).json({ error: 'Title required' });
  const created = create({ title, description, price, stock, imageUrl });
  res.status(201).json(created);
});

// PUT /api/listings/:id
router.put('/:id', (req, res) => {
  const updated = update(req.params.id, req.body || {});
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
});

// DELETE /api/listings/:id
router.delete('/:id', (req, res) => {
  const ok = remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
});

// POST /api/listings/:id/buy
router.post('/:id/buy', (req, res) => {
  const result = buyListing(req.params.id);
  if (result.error) return res.status(400).json({ error: result.error });
  res.json(result);
});

export default router;