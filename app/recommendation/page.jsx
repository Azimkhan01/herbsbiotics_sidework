"use client";

import { useEffect, useState } from "react";

export default function RecommendProducts() {
  const [products, setProducts] = useState([]);
  const [recommended, setRecommended] = useState([]);

  // fetch all products
  const fetchProducts = async () => {
    const res = await fetch("/api/product");
    const data = await res.json();
    setProducts(data);
  };

  // fetch recommended
  const fetchRecommended = async () => {
    const res = await fetch("/api/recommendation");
    const data = await res.json();

    // store productIds only
    const ids = data.map((item) => item.productId);
    setRecommended(ids);
  };

  useEffect(() => {
    fetchProducts();
    fetchRecommended();
  }, []);

  // toggle recommendation
  const toggleRecommend = async (productId) => {
    const isRecommended = recommended.includes(productId);

    if (isRecommended) {
      // remove
      await fetch("/api/recommendation", {
        method: "DELETE",
        body: JSON.stringify({ productId }),
      });
    } else {
      // add
      await fetch("/api/recommendation", {
        method: "POST",
        body: JSON.stringify({ productId }),
      });
    }

    fetchRecommended();
  };

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