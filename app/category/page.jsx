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
    throw new Error("Failed to fetch");
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

return ( <div className="min-h-screen bg-slate-100 p-6"> <div className="max-w-6xl mx-auto">


    {/* PAGE HEADER */}
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-800">
        Category Management
      </h1>

      <p className="text-slate-500 mt-1">
        Create, update and manage product categories
      </p>
    </div>

    {/* FORM */}
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-5">
        {editingId ? "Update Category" : "Create Category"}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

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
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
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
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-3 mt-5">

        <button
          onClick={handleSubmit}
          disabled={submitting}
          className={`px-5 py-2 rounded-lg text-white font-medium ${
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
            className="px-5 py-2 rounded-lg border"
          >
            Cancel
          </button>
        )}
      </div>
    </div>

    {/* CATEGORY LIST */}
    <div className="bg-white rounded-2xl shadow-sm p-6">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">
          Categories
        </h2>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {categories.length} Total
        </span>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1,2,3,4].map((i) => (
            <div
              key={i}
              className="animate-pulse h-24 bg-slate-200 rounded-xl"
            />
          ))}
        </div>
      ) : categories.length === 0 ? (
        <div className="text-center py-10 text-slate-500">
          No categories found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">

          {categories.map((cat) => (
            <div
              key={cat.category_id}
              className="border rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {cat.category_name}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    ID: {cat.category_id}
                  </p>

                  <div className="mt-3">
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                      {cat._count?.products || 0} Products
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">

                  <button
                    onClick={() => handleEdit(cat)}
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    disabled={deletingId === cat.category_id}
                    onClick={() =>
                      handleDelete(cat.category_id)
                    }
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg"
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
