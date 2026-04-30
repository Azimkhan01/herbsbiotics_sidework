export default function OrderItems({ items }) {
  return (
    <div className="mt-3 border-t pt-3 space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between bg-gray-50 p-2 rounded"
        >
          <div>
            <p>{item.Product.name}</p>
            <p className="text-sm text-gray-500">
              Qty: {item.quantity}
            </p>
          </div>

          <p>₹{item.price * item.quantity}</p>
        </div>
      ))}
    </div>
  );
}