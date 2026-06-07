"use client";

import { useEffect, useState } from "react";

export default function RecommendProducts() {
  const [products, setProducts] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("all");

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
        const ids = recData.map(
          (item) => item.productId
        );

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

  const toggleRecommend = async (
    productId
  ) => {
    const isRecommended =
      recommended.includes(productId);

    setRecommended((prev) =>
      isRecommended
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );

    try {
      const res = await fetch(
        "/api/recommendation",
        {
          method: isRecommended
            ? "DELETE"
            : "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            productId,
          }),
        }
      );

      if (!res.ok) {
        throw new Error();
      }
    } catch (err) {
      console.error(err);
      fetchData();
    }
  };

  // Categories for dropdown
  const categories = [
    "all",
    ...new Set(
      products
        .map(
          (product) =>
            product?.categories
              ?.category_name
        )
        .filter(Boolean)
    ),
  ];

  // Search + Category Filter
  const filteredProducts =
    products.filter((product) => {
      const matchesSearch =
        product.Extract_Name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        product.Botanical_Name
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        product.Primary_Benefit
          ?.toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "all" ||
        product.categories
          ?.category_name ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  // Loading Skeleton
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map(
            (_, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 animate-pulse"
              >
                <div className="h-44 bg-gray-300 rounded-lg"></div>

                <div className="h-5 bg-gray-300 mt-4 rounded"></div>

                <div className="h-4 bg-gray-200 mt-2 rounded"></div>

                <div className="h-10 bg-gray-300 mt-4 rounded"></div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Recommended Products
        </h1>

        <p className="text-gray-500 mt-1">
          Select products that should
          appear in recommendations.
        </p>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">

          <input
            type="text"
            placeholder="Search by Extract Name, Botanical Name, Benefit..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(
                e.target.value
              )
            }
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category === "all"
                  ? "All Categories"
                  : category}
              </option>
            ))}
          </select>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          Showing{" "}
          {filteredProducts.length} of{" "}
          {products.length} products
        </p>
      </div>

      {/* EMPTY STATE */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-xl p-10 text-center shadow">
          <h2 className="text-lg font-semibold">
            No matching products found
          </h2>

          <p className="text-gray-500 mt-2">
            Try changing search keywords
            or category filter.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(
            (product) => {
              const isRecommended =
                recommended.includes(
                  product.id
                );

              return (
                <div
                  key={product.id}
                  className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  {/* IMAGE */}
                  <div className="h-52 bg-gray-100">
                    <img
                      src={
                        product
                          ?.product_images?.[0]
                          ?.url ||
                        "/placeholder.png"
                      }
                      alt={
                        product.Extract_Name
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">
                    <h2 className="font-bold text-lg line-clamp-1">
                      {
                        product.Extract_Name
                      }
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                      {product.Botanical_Name ||
                        "No Botanical Name"}
                    </p>

                    <p className="text-sm text-gray-600 mt-2 min-h-[40px] line-clamp-2">
                      {product.Primary_Benefit ||
                        "No primary benefit available"}
                    </p>

                    <div className="mt-3">
                      <span className="inline-flex px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                        {product
                          ?.categories
                          ?.category_name ||
                          "Uncategorized"}
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        toggleRecommend(
                          product.id
                        )
                      }
                      className={`w-full mt-4 py-2 rounded-lg font-medium transition ${
                        isRecommended
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-green-500 hover:bg-green-600 text-white"
                      }`}
                    >
                      {isRecommended
                        ? "Remove Recommendation"
                        : "Recommend Product"}
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}