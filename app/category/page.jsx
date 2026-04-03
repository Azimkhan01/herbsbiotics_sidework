"use client";

import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ name: "", slug: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchCategories = async () => {
    const res = await fetch("/api/category");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.slug) return alert("Fill all fields");

    if (editingId) {
      await fetch(`/api/category/${editingId}`, {
        method: "PUT",
        body: JSON.stringify(form),
      });
    } else {
      await fetch("/api/category", {
        method: "POST",
        body: JSON.stringify(form),
      });
    }

    setForm({ name: "", slug: "" });
    setEditingId(null);
    fetchCategories();
  };

  const handleEdit = (cat) => {
    setForm({ name: cat.name, slug: cat.slug });
    setEditingId(cat.id);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/category/${id}`, {
      method: "DELETE",
    });
    fetchCategories();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Category Management
        </h1>

        {/* FORM CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? "Update Category" : "Create Category"}
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Category Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Slug"
              value={form.slug}
              onChange={(e) =>
                setForm({ ...form, slug: e.target.value })
              }
            />
          </div>

          <button
            onClick={handleSubmit}
            className={`mt-4 px-6 py-2 rounded-lg text-white font-medium ${
              editingId
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {editingId ? "Update" : "Create"}
          </button>
        </div>

        {/* CATEGORY LIST */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">All Categories</h2>

          {categories.length === 0 ? (
            <p className="text-gray-500">No categories found</p>
          ) : (
            <div className="grid gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex justify-between items-center border p-4 rounded-xl hover:shadow-md transition"
                >
                  <div>
                    <p className="font-semibold text-lg">
                      {cat.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {cat.slug}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(cat)}
                      className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(cat.id)}
                      className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}