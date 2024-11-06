export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
    </div>
  );
}
