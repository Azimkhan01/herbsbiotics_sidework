"use client";

import { useEffect, useState } from "react";

export default function RecommendProducts() {
  const [products, setProducts] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch all data together (better performance)
  const fetchData = async () => {
    try {
      setLoading(true);

      const [productRes, recRes] = await Promise.all([
        fetch("/api/product"),
        fetch("/api/recommendation"),
      ]);

      const productData = await productRes.json();
      const recData = await recRes.json();

      if (Array.isArray(productData)) {
        setProducts(productData);
      }

      if (Array.isArray(recData)) {
        const ids = recData.map((item) => item.productId);
        setRecommended(ids);
      }
    } catch (err) {
      console.error("FETCH ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ⚡ Optimistic UI
  const toggleRecommend = async (productId) => {
    const isRecommended = recommended.includes(productId);

    // instant UI update
    setRecommended((prev) =>
      isRecommended
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );

    try {
      await fetch("/api/recommendation", {
        method: isRecommended ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
    } catch (err) {
      console.error(err);
      fetchData(); // fallback if failed
    }
  };

  // ✅ LOADING STATE
  if (loading) {
    return (
      <div className="p-6 grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse border p-4 rounded-lg"
          >
            <div className="h-40 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 mt-3 w-3/4"></div>
            <div className="h-4 bg-gray-200 mt-2 w-1/2"></div>
            <div className="h-10 bg-gray-300 mt-4 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Manage Recommended Products
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          const isRecommended = recommended.includes(product.id);

          return (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow"
            >
              <img
                src={product.images?.[0]?.url}
                alt=""
                className="h-40 w-full object-cover rounded"
              />

              <h2 className="font-semibold mt-2">
                {product.name}
              </h2>

              <p className="text-sm text-gray-500">
                ₹{product.price}
              </p>

              <button
                onClick={() => toggleRecommend(product.id)}
                className={`mt-3 w-full py-2 rounded ${
                  isRecommended
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {isRecommended
                  ? "Remove Recommendation"
                  : "Mark as Recommended"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}