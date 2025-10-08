import { useEffect, useState } from 'react';
import { apiFetch } from '../lib/api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState('');

  async function fetchListings() {
    try {
      const data = await apiFetch('/api/listings');
      setItems(data);
    } catch (e) {
      setErr(e.message || 'Failed to load listings');
    }
  }

  useEffect(() => {
    fetchListings();
  }, []);

  async function handleBuy(id) {
    try {
      const { listing } = await apiFetch(`/api/listings/${id}/buy`, {
        method: 'POST'
      });
      setItems((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...listing } : p))
      );
    } catch (e) {
      alert(e.message || 'Purchase failed');
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Marketplace
      </h2>
      {err ? <p className="text-sm text-red-600 mb-3">{err}</p> : null}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} onBuy={() => handleBuy(p.id)} />
        ))}
      </div>
    </div>
  );
}