export default function OrderItems({ items }) {
  return (
    <div className="mt-4 border-t pt-3 space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
        >
          <div>
            <p className="font-medium">{item.Product.name}</p>
            <p className="text-sm text-gray-500">
              Qty: {item.quantity}
            </p>
          </div>

          <p className="font-semibold">
            ₹{item.price * item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
}