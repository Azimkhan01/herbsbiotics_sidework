"use client";

import { useEffect, useState } from "react";

export default function RecommendProducts() {
  const [products, setProducts] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const toggleRecommend = async (productId) => {
    const isRecommended = recommended.includes(productId);

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
      fetchData();
    }
  };

  // 🔹 Skeleton Loader (Responsive)
  if (loading) {
    return (
      <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        Manage Recommended Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => {
          const isRecommended = recommended.includes(product.id);

          return (
            <div
              key={product.id}
              className="border p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className="h-40 sm:h-44 w-full object-cover rounded"
              />

              <h2 className="font-semibold mt-2 text-sm sm:text-base line-clamp-1">
                {product.name}
              </h2>

              <p className="text-sm text-gray-500">
                ₹{product.price}
              </p>

              <button
                onClick={() => toggleRecommend(product.id)}
                className={`mt-3 w-full py-2.5 text-sm sm:text-base rounded font-medium transition ${
                  isRecommended
                    ? "bg-red-500 active:bg-red-600"
                    : "bg-green-500 active:bg-green-600"
                } text-white`}
              >
                {isRecommended
                  ? "Remove"
                  : "Recommend"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}