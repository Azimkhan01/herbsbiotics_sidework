"use client";

import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const [form, setForm] = useState({
    category_id: "",
    category_name: "",
  });

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/category");

      if (!res.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async () => {
    if (!form.category_id || !form.category_name) {
      return alert("Please fill all fields");
    }

    try {
      setSubmitting(true);

      if (editingId) {
        const res = await fetch(`/api/category/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category_name: form.category_name,
          }),
        });

        if (!res.ok) {
          throw new Error("Update failed");
        }
      } else {
        const res = await fetch("/api/category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!res.ok) {
          throw new Error("Create failed");
        }
      }

      setForm({
        category_id: "",
        category_name: "",
      });

      setEditingId(null);
      fetchCategories();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (category) => {
    setEditingId(category.category_id);

    setForm({
      category_id: category.category_id,
      category_name: category.category_name,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(id);

      const res = await fetch(`/api/category/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      fetchCategories();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
            Category Management
          </h1>

          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Create, update and manage product categories
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-5">
            {editingId ? "Update Category" : "Create Category"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Category ID"
              disabled={editingId}
              value={form.category_id}
              onChange={(e) =>
                setForm({
                  ...form,
                  category_id: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              placeholder="Category Name"
              value={form.category_name}
              onChange={(e) =>
                setForm({
                  ...form,
                  category_name: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className={`w-full sm:w-auto px-5 py-3 rounded-lg text-white font-medium transition ${
                editingId
                  ? "bg-amber-500 hover:bg-amber-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {submitting
                ? "Processing..."
                : editingId
                ? "Update Category"
                : "Create Category"}
            </button>

            {editingId && (
              <button
                onClick={() => {
                  setEditingId(null);
                  setForm({
                    category_id: "",
                    category_name: "",
                  });
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-lg border hover:bg-slate-50"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* CATEGORY LIST */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
            <h2 className="text-lg sm:text-xl font-semibold">
              Categories
            </h2>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {categories.length} Total
            </span>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="animate-pulse h-36 bg-slate-200 rounded-xl"
                />
              ))}
            </div>
          ) : categories.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              No categories found
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <div
                  key={cat.category_id}
                  className="border rounded-xl p-5 hover:shadow-lg transition duration-300 bg-white"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 break-words">
                        {cat.category_name}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1 break-all">
                        ID: {cat.category_id}
                      </p>

                      <div className="mt-3">
                        <span className="bg-green-100 text-green-700 text-xs sm:text-sm px-3 py-1 rounded-full">
                          {cat._count?.products || 0} Products
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      <button
                        onClick={() => handleEdit(cat)}
                        className="flex-1 min-w-[100px] px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
                      >
                        Edit
                      </button>

                      <button
                        disabled={deletingId === cat.category_id}
                        onClick={() =>
                          handleDelete(cat.category_id)
                        }
                        className="flex-1 min-w-[100px] px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition disabled:opacity-50"
                      >
                        {deletingId === cat.category_id
                          ? "Deleting..."
                          : "Delete"}
                      </button>
                    </div>
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