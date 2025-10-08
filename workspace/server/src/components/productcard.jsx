export default function ProductCard({ product, onBuy }) {
  const { title, description, price, stock, imageUrl } = product;
  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="h-40 w-full object-cover"
        loading="lazy"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-semibold text-blue-600">${price.toFixed(2)}</span>
          <span className={`text-xs ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock > 0 ? `${stock} in stock` : 'Out of stock'}
          </span>
        </div>
        <button
          onClick={onBuy}
          disabled={stock <= 0}
          className="mt-3 w-full inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-white text-sm font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Buy
        </button>
      </div>
    </div>
  );
}
