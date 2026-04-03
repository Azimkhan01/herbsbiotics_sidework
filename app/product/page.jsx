"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    highlights: "",
    price: "",
    stock: "",
    categoryId: "",
  });

  const [loading, setLoading] = useState(true); // page loading
  const [submitting, setSubmitting] = useState(false); // create product
  const [deletingId, setDeletingId] = useState(null); // delete per item

  // FETCH DATA
  const fetchData = async () => {
    setLoading(true);
    const p = await fetch("/api/product").then((res) => res.json());
    const c = await fetch("/api/category").then((res) => res.json());

    setProducts(p);
    setCategories(c);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // CREATE PRODUCT
  const handleCreate = async () => {
    if (!form.name || !form.categoryId) {
      return alert("Fill required fields");
    }

    setSubmitting(true);

    await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
        description: form.description.split(","),
        highlights: form.highlights.split(","),
      }),
    });

    setForm({
      name: "",
      description: "",
      highlights: "",
      price: "",
      stock: "",
      categoryId: "",
    });

    setSubmitting(false);
    fetchData();
  };

  // DELETE PRODUCT
  const handleDelete = async (id) => {
    setDeletingId(id);
    await fetch(`/api/product/${id}`, { method: "DELETE" });
    setDeletingId(null);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          🛍 Product Management
        </h1>

        {/* FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Create Product
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="border p-3 rounded-lg"
              placeholder="Product Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <select
              className="border p-3 rounded-lg"
              value={form.categoryId}
              onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>

            <input
              className="border p-3 rounded-lg"
              placeholder="Description (comma separated)"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />

            <input
              className="border p-3 rounded-lg"
              placeholder="Highlights (comma separated)"
              value={form.highlights}
              onChange={(e) => setForm({ ...form, highlights: e.target.value })}
            />

            <input
              className="border p-3 rounded-lg"
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <input
              className="border p-3 rounded-lg"
              type="number"
              placeholder="Stock"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
            />
          </div>

          <button
            onClick={handleCreate}
            disabled={submitting}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl flex items-center justify-center"
          >
            {submitting ? "Creating..." : "➕ Create Product"}
          </button>
        </div>

        {/* PRODUCT LIST */}
        {loading ? (
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl shadow animate-pulse"
              >
                <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
                <div className="h-20 bg-gray-200 rounded mb-2"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-gray-300 rounded"></div>
                  <div className="h-8 w-24 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="text-gray-500">No products found</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  ₹{p.price} • Stock: {p.stock}
                </p>

                {/* IMAGES */}
                <div className="flex gap-2 overflow-x-auto mb-2">
                  {p.images?.length > 0 ? (
                    p.images.map((img) => (
                      <img
                        key={img.id}
                        src={img.url}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    ))
                  ) : (
                    <p className="text-xs text-gray-400">No images</p>
                  )}
                </div>

                <p className="text-xs text-gray-500 mb-3">
                  {p.images?.length || 0}/5 images
                </p>

                {/* ACTIONS */}
                <div className="flex justify-between items-center gap-2">
                  <Link href={`/product/${p.id}/images`}>
                    <button className="px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
                      Manage Images
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(p.id)}
                    disabled={deletingId === p.id}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    {deletingId === p.id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}