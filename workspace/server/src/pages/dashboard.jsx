import { useEffect, useMemo, useState } from 'react';
import { apiFetch } from '../lib/api';

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    apiFetch('/api/listings')
      .then(setItems)
      .catch((e) => setErr(e.message || 'Failed to load stats'));
  }, []);

  const stats = useMemo(() => {
    const totalListings = items.length;
    const totalInStock = items.reduce((sum, i) => sum + (i.stock || 0), 0);
    const totalPurchases = items.reduce(
      (sum, i) => sum + (i.purchases || 0),
      0
    );
    return { totalListings, totalInStock, totalPurchases };
  }, [items]);

  const statCard = (label, value) => (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Dashboard
      </h2>
      {err ? <p className="text-sm text-red-600 mb-3">{err}</p> : null}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        {statCard('Total Listings', stats.totalListings)}
        {statCard('Total In Stock', stats.totalInStock)}
        {statCard('Total Purchases', stats.totalPurchases)}
      </div>
    </div>
  );
}
