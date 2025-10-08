import { v4 as uuidv4 } from 'uuid';

const listings = [
  {
    id: uuidv4(),
    title: 'Wireless Earbuds',
    description: 'Noise-cancelling earbuds.',
    price: 49.99,
    stock: 10,
    imageUrl: 'https://picsum.photos/seed/earbuds/400/300',
    purchases: 0
  },
  {
    id: uuidv4(),
    title: 'Smart Watch',
    description: 'Fitness tracking smart watch.',
    price: 99.99,
    stock: 5,
    imageUrl: 'https://picsum.photos/seed/watch/400/300',
    purchases: 0
  },
  {
    id: uuidv4(),
    title: 'Portable Charger',
    description: '10,000mAh power bank.',
    price: 19.99,
    stock: 20,
    imageUrl: 'https://picsum.photos/seed/charger/400/300',
    purchases: 0
  }
];

export function getAll() {
  return listings;
}

export function getById(id) {
  return listings.find((l) => l.id === id) || null;
}

export function create(data) {
  const listing = {
    id: uuidv4(),
    title: data.title || 'Untitled',
    description: data.description || '',
    price: Number(data.price) || 0,
    stock: Number.isFinite(Number(data.stock)) ? Number(data.stock) : 0,
    imageUrl:
      data.imageUrl ||
      `https://picsum.photos/seed/${Math.random().toString(36).slice(2)}/400/300`,
    purchases: 0
  };
  listings.push(listing);
  return listing;
}

export function update(id, data) {
  const existing = getById(id);
  if (!existing) return null;
  existing.title = data.title ?? existing.title;
  existing.description = data.description ?? existing.description;
  existing.price = Number.isFinite(Number(data.price))
    ? Number(data.price)
    : existing.price;
  existing.stock = Number.isFinite(Number(data.stock))
    ? Number(data.stock)
    : existing.stock;
  existing.imageUrl = data.imageUrl ?? existing.imageUrl;
  return existing;
}

export function remove(id) {
  const idx = listings.findIndex((l) => l.id === id);
  if (idx === -1) return false;
  listings.splice(idx, 1);
  return true;
}

export function buy(id) {
  const existing = getById(id);
  if (!existing) return { error: 'Not found' };
  if (existing.stock <= 0) return { error: 'Out of stock' };
  existing.stock -= 1;
  existing.purchases += 1;
  return { success: true, listing: existing };
}